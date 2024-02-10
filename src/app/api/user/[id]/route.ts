import dbConnect from '~/db/db';
import User from '~/models/user';
export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const id = pathname.split('/').pop();
  try {
    await dbConnect();
    const response = await User.find({ _id: id });
    return NextResponse.json({ data: response }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const id = pathname.split('/').pop();
  if (!id) {
    if (!id) return NextResponse.json({ message: 'error:User id missing', status: 500 });
  }
  try {
    await dbConnect();
    const data = await req.json();
    await User.findOneAndUpdate({ _id: id }, data);
    return NextResponse.json({ message: 'Data updated', status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}
