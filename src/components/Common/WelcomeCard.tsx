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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image src='/images/giftbox.png' alt='giftbox' height={180} width={180} />
          </div>
          <p style={{ textAlign: 'center', color: 'white', fontSize: '14px', marginTop: '25px' }}>
            {subTitle}
          </p>
        </div>
        <div>{children}</div>
      </VerticalApart>
    </div>
  );
}
