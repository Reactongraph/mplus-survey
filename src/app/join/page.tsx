'use client';

import Button from '@/components/Common/Button';
import VerticalApart from '@/components/Common/VerticalApart';
import loginProvider from '@/hoc/loginProvider';
import useTnc from '@/hooks/useTnc';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Join = ({ login, isLoading }: any) => {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const { TncComponent, isAccepted } = useTnc();

  const handleSubmit = () => {
    login(email);
  };
  return (
    <div
      style={{
        background: '#E8F1FC',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <VerticalApart height='90vh'>
        <div>
          <div
            style={{
              position: 'relative',
              textAlign: 'center',
              fontWeight: 600,
              marginBottom: '50px'
            }}
          >
            <Image
              style={{
                marginRight: '30px',
                position: 'absolute',
                top: '50%',
                left: '3%',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer'
              }}
              src='/images/arrow-left.png'
              alt='email'
              height={25}
              width={25}
              onClick={() => router.back()}
            />
            Personal Information
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#297AFC80', fontSize: '12px', fontWeight: 600 }}>
              EMAIL ADDRESS <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #C1DDFF',
                borderRadius: '10px',
                outline: 'none'
              }}
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {TncComponent}
        </div>
        <Button
          disabled={!isAccepted || !email || isLoading}
          textTransform='capitalize'
          handler={() => handleSubmit()}
          loading={isLoading}
        >
          Continue
        </Button>
      </VerticalApart>
    </div>
  );
};

export default loginProvider(Join);
