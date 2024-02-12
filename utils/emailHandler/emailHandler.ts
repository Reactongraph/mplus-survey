import { couponAlertTemplate, emailVerificationTemplate } from './emailTemplates';
import * as nodemailer from 'nodemailer';
import headerLogo from '~/public/images/precision-light.png';
import shieldLogo from '~/public/images/Shield check.png';
import { getVerifyEmailTemplate } from '../helper';
const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || '';
// import sgMail from '@sendgrid/mail';
// sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || '');
// export const sentMail = async (toMail: string, subject: string, html: string = '') => {
//   try {
//     await sgMail.send({
//       from: `"MPlus Survey" ${process.env.NEXT_PUBLIC_SENDGRID_EMAIL}`,
//       to: toMail,
//       subject,
//       html
//     });
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

export const sentMail = async (toMail: string, subject: string, html: string = '') => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: `mailto:${process.env.NODEMAILER_EMAIL}`,
        pass: `${process.env.NODEMAILER_KEY}`
      }
    });
    await transporter.sendMail({
      from: `${process.env.NODEMAILER_EMAIL}`,
      to: toMail,
      subject,
      html
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

export const userEmailVerificationMail = async (email: string, token: string) => {
  try {
    const link = `${process.env.NEXT_PUBLIC_APP_URL}/survey?token=${token}`;
    await sentMail(email, 'Verify Your Email', emailVerificationTemplate(link));
    // await sentMail(email, 'Verify Your Email', getVerifyEmailTemplate(link));
  } catch (error: any) {
    throw new Error(error);
  }
};

export const couponAlertMail = async (couponId: string) => {
  try {
    await sentMail(adminEmail, `Add coupon for ${couponId}`, couponAlertTemplate(couponId));
  } catch (error: any) {
    throw new Error(error);
  }
};
