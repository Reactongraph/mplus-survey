import dbConnect from '~/db/db';
import User from '~/models/user';
export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import { encryptText } from '~/utils/helper';
// import { userEmailVerificationMail } from '~/utils/emailHandler/emailHandler';
//do't remove comment
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();
    const response = await User.create(data);
    const linkToken = encryptText(response._id);
    // await userEmailVerificationMail(response.email, linkToken);
    return NextResponse.json({ data: response }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}
