import jwt from 'jsonwebtoken';
import dbConnect from '~/db/db';
import Coupon from '~/models/coupon';
const couponThreshold = process.env.NEXT_PUBLIC_COUPON_THRESHOLD || '';
import CryptoJS from 'crypto-js';
import fs from 'fs';
import path from 'path';

const key = process.env.NEXT_PUBLIC_SECRET_KEY || '';

export const sentAlert = async (id: string) => {
  try {
    await dbConnect();
    const response = await Coupon.findById({ _id: id });
    if (Number(response && response.availableCount) < Number(couponThreshold)) {
    }
  } catch (error) {
    return error;
  }
};

// export const encryptText = (text: string) => {
//   return CryptoJS.AES.encrypt(text, key).toString();
// };

// export const decryptText = (encryptedText: string) => {
//   const bytes = CryptoJS.AES.decrypt(encryptedText, key);
//   return bytes.toString(CryptoJS.enc.Utf8);
// };

export const getTokenValue = (input: string) => {
  const tokenParam = 'token=';
  const startIndex = input.indexOf(tokenParam);
  if (startIndex !== -1) {
    const tokenStartIndex = startIndex + tokenParam.length;
    const tokenEndIndex =
      input.indexOf('&', tokenStartIndex) !== -1
        ? input.indexOf('&', tokenStartIndex)
        : input.length;
    let token = input.substring(tokenStartIndex, tokenEndIndex);
    return token;
  }
  return null;
};

export const getVerifyEmailTemplate = (link: string) => {
  let text = fs.readFileSync(path.resolve('/emailTemplates/veify.html'), {
    encoding: 'utf-8',
    flag: 'r'
  });
  text = text.replace('{{LINK}}', link);
  return text;
};

export const encryptText = async (_id: string) => {
  const token = jwt.sign({ _id }, process.env.NEXT_PUBLIC_JWT_KEY || '');
  return token;
};

export const decryptText = async (token: string) => {
  const data = await jwt.verify(token, process.env.NEXT_PUBLIC_JWT_KEY || '');
  // @ts-ignore
  return data?._id;
};
