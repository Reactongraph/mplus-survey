import dbConnect from '~/db/db';
import Coupon from '~/models/coupon';
export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';

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
