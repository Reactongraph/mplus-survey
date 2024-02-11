'use client';

import WelcomeCard from '@/components/Common/WelcomeCard';
import loginProvider from '@/hoc/loginProvider';
import { gogleLoginFail, gogleLoginSuccess } from '@/utils/types/helpers';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import Modal from '@/components/Model';
import useTnc from '@/hooks/useTnc';
import Button from '@/components/Common/Button';

const Page = ({ login, isLoading }: any) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { TncComponent, isAccepted } = useTnc();
  const [googleEmail, setGoogleEmail] = useState(null);

  // google login ---
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (data) => {
      const email = await gogleLoginSuccess(data);
      if (email) {
        setGoogleEmail(email);
        setIsConfirmOpen(true);
      }
    },
    onError: gogleLoginFail
  });

  const router = useRouter();
  const handleLogin = (provider: 'email' | 'google') => {
    if (provider === 'email') {
      router.push('/join');
    }
    if (provider === 'google') {
      loginWithGoogle();
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
      <Modal isOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)}>
        <div>
          <div
            style={{
              textAlign: 'center',
              fontWeight: 600,
              marginBottom: '30px',
              fontSize: '15px'
            }}
          >
            Privacy Policy & Terms of Use
          </div>
          {TncComponent}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginTop: '20px'
            }}
          >
            <Button
              varient='v2'
              handler={() => {
                setIsConfirmOpen(false);
                setGoogleEmail(null);
              }}
            >
              Cancel
            </Button>
            <Button
              disabled={!googleEmail || !isAccepted || isLoading}
              varient='v1'
              handler={() => {
                login(googleEmail);
                setIsConfirmOpen(false);
              }}
              loading={isLoading}
            >
              Continue
            </Button>
          </div>
        </div>
      </Modal>
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
