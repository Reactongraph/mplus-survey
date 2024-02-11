import dbConnect from '~/db/db';
import Transaction from '~/models/transaction';
export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import Coupon from '~/models/coupon';
import { couponAlertMail } from '~/utils/emailHandler/emailHandler';
const couponThreshold = process.env.NEXT_PUBLIC_COUPON_THRESHOLD || '';

export async function POST(req: NextRequest) {
  try {
    const id = req.cookies.get('userId');
    if (!id) return NextResponse.json({ message: 'error:User id missing' }, { status: 500 });
    const data = await req.json();
    const { couponId } = data;
    await dbConnect();
    let couponData;

    const isAlreadyHasTransition = await Transaction.findOne({ userId: id.value });
    if (isAlreadyHasTransition) {
      couponData = await Coupon.findOne({ _id: isAlreadyHasTransition.couponId });
    } else {
      await Transaction.create({ userId: id.value, couponId });
      couponData = await Coupon.findOneAndUpdate({ _id: couponId }, data);
      if (Number(couponData.availableCount) < Number(couponThreshold)) {
        await couponAlertMail(couponData.email);
      }
    }

    return NextResponse.json({ data: couponData, status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}
