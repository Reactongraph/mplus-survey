'use client';

import Button from '@/components/Common/Button';
import GradientCard from '@/components/Common/GradientCard';
import { couponProviders } from '@/utils/types/staticData';
import Link from 'next/link';
import React from 'react';

const Result = () => {
  return (
    <GradientCard
      image='/images/openbox.png'
      title='How To Play'
      subTitle='Complete the survey questions to earn a prize!'
    >
      <div
        style={{
          padding: '20px'
        }}
      >
        <Button
          rounded={true}
          varient='v3'
          handler={() => {}}
          As={Link}
          otherProps={{
            href: `/survey/1`
          }}
        >
          Start <span style={{ fontSize: '30px' }}>→</span>
        </Button>
      </div>
    </GradientCard>
  );
};

export default Result;
