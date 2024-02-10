'use client';

import Button from '@/components/Common/Button';
import GradientCard from '@/components/Common/GradientCard';
import { couponProviders } from '@/utils/types/staticData';
import Link from 'next/link';
import React from 'react';

const Result = () => {
  return (
    <GradientCard
      image='/images/giftbox.png'
      title='Congrats!'
      subTitle='Pick a prize from the options below...'
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px'
        }}
      >
        {couponProviders.map((provider) => {
          return (
            <Button
              key={provider.id}
              rounded={true}
              varient='v3'
              handler={() => {}}
              textTransform='capitalize'
              As={Link}
              otherProps={{
                href: `/survey/coupon/${provider.id}`
              }}
            >
              {provider.provider}
            </Button>
          );
        })}
      </div>
    </GradientCard>
  );
};

export default Result;
