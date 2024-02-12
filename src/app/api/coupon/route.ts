import dbConnect from '~/db/db';
import Coupon from '~/models/coupon';
export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import User from '~/models/user';

export async function GET() {
  try {
    await dbConnect();
    const response = await Coupon.find();
    return NextResponse.json({ data: response }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();
    const response = await Coupon.create(data);
    return NextResponse.json({ data: response }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const id = req.cookies.get('userId');
    if (!id) return NextResponse.json({ message: 'error:User id missing' }, { status: 500 });
    await dbConnect();
    const data = await req.json();

    const { couponId } = data;
    let coupon;
    let existingCoupon = await Coupon.findOne({ userId: id.value });

    if (existingCoupon) {
      coupon = existingCoupon;
    } else {
      coupon = await Coupon.findOneAndUpdate(
        { _id: couponId },
        {
          $set: {
            userId: id.value,
            redeemDate: new Date()
          }
        }
      );

      await User.findOneAndUpdate(
        { _id: id.value },
        {
          $set: {
            couponId: coupon._id,
            surveyCompleteDate: new Date()
          }
        }
      );
    }

    return NextResponse.json({ data: coupon, status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}