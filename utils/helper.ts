import dbConnect from '~/db/db';
import Coupon from '~/models/coupon';
const couponThreshold = process.env.NEXT_PUBLIC_COUPON_THRESHOLD || '';
import CryptoJS from 'crypto-js';
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

export const encryptText = (text: string) => {
  return CryptoJS.AES.encrypt(text, key).toString();
};

export const decryptText = (encryptedText: string) => {
  const bytes = CryptoJS.AES.decrypt(encryptedText, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};

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
