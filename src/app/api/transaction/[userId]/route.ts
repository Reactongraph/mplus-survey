import dbConnect from '~/db/db';
export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import Transaction from '~/models/transaction';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const userId = pathname.split('/').pop();
  try {
    await dbConnect();
    const response = await Transaction.find({ userId: userId }).populate('couponId');
    return NextResponse.json({ data: response }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}
