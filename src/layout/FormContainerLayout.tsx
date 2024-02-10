import Image from 'next/image';
import React, { ReactNode } from 'react';

const FormContainerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        background: '#E8F1FC',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          background: 'linear-gradient(109.04deg, #001044 5.66%, #297AFC 119.79%)',
          height: '140px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          src='/images/precision-light.png'
          alt='precision-light.png'
          width={185.5}
          height={49}
        />
      </div>
      <div
        style={{
          padding: '10px'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FormContainerLayout;
