import dbConnect from '~/db/db';
import Transaction from '~/models/transaction';
export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();
    const response = await Transaction.create(data);
    return NextResponse.json({ data: response }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}
