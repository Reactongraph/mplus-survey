import dbConnect from '~/db/db';
import User from '~/models/user';
export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import { decryptText, encryptText, getTokenValue } from '~/utils/helper';
import { userEmailVerificationMail } from '~/utils/emailHandler/emailHandler';
import Coupon from '~/models/coupon';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();
    let userData;

    const isUserExists = await User.findOne(data);
    if (isUserExists) {
      userData = isUserExists;
    } else {
      userData = await User.create(data);
    }

    const linkToken = encryptText(String(userData._id));
    await userEmailVerificationMail(userData.email, linkToken);
    return NextResponse.json({ data: userData }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  /* eslint-disable no-console */
  const url = new URL(req.url);
  console.log('query', req.url);
  const token = getTokenValue(url.search);
  console.log('token', token);
  const userId = decryptText(String(token));
  console.log('userId', token);
  try {
    await dbConnect();
    let response = await User.findOne({ _id: userId }).select({ profilingQuestions: 0 });
    const hasTransaction = await Coupon.findOne({ userId });
    return NextResponse.json({ data: response, hasTransaction: hasTransaction }, { status: 200 });
  } catch (e) {
    /* eslint-disable no-console */
    console.log('error check', e);
    return NextResponse.json(e, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const id = req.cookies.get('userId');
  if (!id) return NextResponse.json({ message: 'error:User id missing' }, { status: 500 });
  try {
    await dbConnect();
    const data = await req.json();
    const { profilingQuestions, surveyStep } = data;
    await User.findOneAndUpdate(
      { _id: id.value },
      {
        $set: {
          surveyStep
        },
        $push: {
          profilingQuestions
        }
      }
    );
    return NextResponse.json({ message: 'Data updated', status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}
