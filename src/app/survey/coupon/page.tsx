'use client';

import Button from '@/components/Common/Button';
import GradientCard from '@/components/Common/GradientCard';
import useRequest from '@/hooks/useRequest';
import { CouponListType } from '@/utils/types/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Result = ({ searchParams }: { searchParams: { token: string } }) => {
  const { token } = searchParams;
  const { request, response } = useRequest();
  const [couponList, setCouponList] = useState<CouponListType>([]);

  useEffect(() => {
    request('GET', 'coupon');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (response) {
      setCouponList(response?.data);
    }
  }, [response]);
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
        {couponList.map((coupon) => {
          return (
            <Button
              key={coupon._id}
              rounded={true}
              varient='v3'
              handler={() => {}}
              textTransform='capitalize'
              As={Link}
              otherProps={{
                href: `/survey/coupon/${coupon._id}?token=${token}`
              }}
            >
              {coupon.provider}
            </Button>
          );
        })}
      </div>
    </GradientCard>
  );
};

export default Result;
