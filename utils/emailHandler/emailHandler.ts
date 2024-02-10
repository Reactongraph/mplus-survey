import sgMail from '@sendgrid/mail';
import { couponAlertTemplate, emailVerificationTemplate } from './emailTemplates';
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || '');
const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || '';
export const sentMail = async (toMail: string, subject: string, html: string = '') => {
  try {
    await sgMail.send({
      from: `"MPlus Survey" ${process.env.NEXT_PUBLIC_SENDGRID_EMAIL}`,
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
