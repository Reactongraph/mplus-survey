import Image from 'next/image';
import React, { ReactNode } from 'react';
import VerticalApart from './VerticalApart';

type GradientCardPropType = {
  children: ReactNode;
  image?: string;
  title?: string;
  subTitle?: string;
  enableImageBackground?: boolean;
};

const GradientCard = ({
  children,
  image,
  title,
  subTitle,
  enableImageBackground = false
}: GradientCardPropType) => {
  return (
    <div
      style={{
        background: 'linear-gradient(360deg, #297AFC -37.31%, #001044 129.03%)',
        minHeight: '100vh',
        width: '100%',
        padding: '40px 10px 20px 10px'
      }}
    >
      <VerticalApart height='600px'>
        <div>
          {image && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '217px',
                  height: '217px',
                  borderRadius: '10px',
                  ...(enableImageBackground ? { background: 'white' } : {})
                }}
              >
                <Image src={image} alt='giftbox' height={180} width={180} />
              </div>
            </div>
          )}
          {title && (
            <h1 style={{ textAlign: 'center', color: 'white', fontSize: '52px', fontWeight: 700 }}>
              {title}
            </h1>
          )}
          {subTitle && (
            <p style={{ textAlign: 'center', color: 'white', fontSize: '14px', marginTop: '25px' }}>
              {subTitle}
            </p>
          )}
        </div>
        <div>{children}</div>
      </VerticalApart>
    </div>
  );
};

export default GradientCard;
