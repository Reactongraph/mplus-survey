import dbConnect from '~/db/db';
import User from '~/models/user';
export const dynamic = 'force-dynamic';
import { NextResponse, NextRequest } from 'next/server';
import { decryptText, encryptText, getTokenValue } from '~/utils/helper';
import Transaction from '~/models/transaction';
import { userEmailVerificationMail } from '~/utils/emailHandler/emailHandler';

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
  const url = new URL(req.url);
  const token = getTokenValue(url.search);
  const userId = decryptText(String(token));
  try {
    await dbConnect();
    let response = await User.findOne({ _id: userId }).select({ profilingQuestions: 0 });
    const hasTransaction = await Transaction.findOne({ userId });
    return NextResponse.json({ data: response, hasTransaction: hasTransaction }, { status: 200 });
  } catch (e) {
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
    const response = await User.create(data);
    const linkToken = encryptText(String(response._id));
    await userEmailVerificationMail(response.email, linkToken);
    return NextResponse.json({ data: response }, { status: 200 });
  } catch (e) {
    return NextResponse.json(e, { status: 500 });
  }
}
