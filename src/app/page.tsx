'use client';

import WelcomeCard from '@/components/Common/WelcomeCard';
import loginProvider from '@/hoc/loginProvider';
import { oauthSignIn } from '@/utils/types/helpers';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Page = ({ login }: any) => {
  const router = useRouter();
  const handleLogin = (provider: 'email' | 'google') => {
    if (provider === 'email') {
      router.push('/join');
    }
    if (provider === 'google') {
      const result = oauthSignIn();
      // console.log(result);
      login('some@email.com');
    }
  };
  return (
    <>
      <WelcomeCard subTitle='Earn a gift card of your choice by filling out a short survey.'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <LiginLink
            image='/images/email.png'
            text='Continue with Email'
            handler={() => handleLogin('email')}
          />
          <LiginLink
            image='/images/google.png'
            text='Continue with Google'
            handler={() => handleLogin('google')}
          />
        </div>
      </WelcomeCard>
    </>
  );
};

const LiginLink = ({
  image,
  text,
  handler
}: {
  image: string;
  text: string;
  handler: () => void;
}) => {
  return (
    <div
      style={{
        padding: '12px 30px',
        borderRadius: '8px',
        color: '#001044',
        fontSize: '14px',
        backgroundColor: 'white',
        width: '300px',
        position: 'relative',
        textAlign: 'center',
        cursor: 'pointer'
      }}
      onClick={handler}
    >
      <Image
        style={{
          marginRight: '30px',
          position: 'absolute',
          top: '50%',
          left: '10%',
          transform: 'translate(-50%, -50%)'
        }}
        src={image}
        alt='email'
        height={30}
        width={30}
      />
      {text}
    </div>
  );
};

export default loginProvider(Page);
