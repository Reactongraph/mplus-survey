import Image from 'next/image';
import { ReactNode } from 'react';
import VerticalApart from './VerticalApart';

export default function WelcomeCard({
  children,
  subTitle
}: {
  children: ReactNode;
  subTitle: string;
}) {
  return (
    <div className='p-5 pt-20 flex min-h-screen flex-col items-center bg-landingPrimary bg-cover bg-center bg-no-repeat landingPrimary'>
      <VerticalApart height='550px'>
        <div>
          <div className='flex justify-center items-center'>
            <Image src='/images/giftbox.png' alt='giftbox' height={180} width={180} />
          </div>
          <p className='text-center text-white text-base mt-6'>{subTitle}</p>
        </div>
        <div>{children}</div>
      </VerticalApart>
    </div>
  );
}
