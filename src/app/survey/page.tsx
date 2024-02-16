'use client';

import Button from '@/components/Common/Button';
import GradientCard from '@/components/Common/GradientCard';
import Link from 'next/link';
import React from 'react';

const Result = ({ searchParams }: { searchParams: { token: string } }) => {
  const { token } = searchParams;
  return (
    <GradientCard
      image='/images/openbox.png'
      title='How To Play'
      subTitle='Complete the survey questions to earn a prize!'
      css={true}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          rounded={true}
          varient='v3'
          addFlex={true}
          handler={() => {}}
          As={Link}
          otherProps={{
            href: `/survey/1?token=${token}`
          }}
        >
          Start <span style={{ fontSize: '30px', position: 'relative', bottom: '1px' }}>→</span>
        </Button>
      </div>
    </GradientCard>
  );
};

export default Result;
