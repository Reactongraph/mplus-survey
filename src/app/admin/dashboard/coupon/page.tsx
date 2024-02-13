'use client';

import FullScreenLoader from '@/components/Loaders/FullScreenLoader';
import useRequest from '@/hooks/useRequest';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const Coupon = () => {
  const { request, response, isLoading } = useRequest();
  const [list, setList] = useState([]);

  useEffect(() => {
    request('GET', 'coupon/list');
  }, []);

  useEffect(() => {
    if (response) {
      setList(response.data);
    }
  }, [response]);
  return (
    <>
      {isLoading && <FullScreenLoader />}
      <div className='pt-8'>
        <h2 className='text-center font-semibold  text-lg'>Coupons</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '10px'
          }}
        >
          <div
            style={{ width: '90%', maxWidth: '1000px' }}
            className='relative overflow-x-auto shadow-md sm:rounded-lg'
          >
            <table className='w-full text-sm text-left rtl:text-right '>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue7 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Code
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    provider
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Status
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Redeemed by
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Redeemed on
                  </th>
                </tr>
              </thead>
              <tbody>
                {list.map((elem: any) => {
                  return (
                    <tr
                      key={elem._id}
                      className='bg-white border-b dark:bg-blue1 dark:border-gray-700'
                    >
                      <th scope='row' className='px-6 py-4 font-medium '>
                        {elem.code}
                      </th>
                      <th scope='row' className='px-6 py-4 font-medium '>
                        {elem.provider}
                      </th>
                      <th
                        scope='row'
                        className={`px-6 py-4 font-medium text-${elem?.redeemDate ? 'success' : 'red-500'}`}
                      >
                        {elem?.redeemDate ? 'Redeemed' : 'Not Redeemed'}
                      </th>
                      <td className='px-6 py-4'>{elem?.user?.email}</td>
                      <td className='px-6 py-4'>
                        {elem?.redeemDate ? moment(elem.redeemDate).format('YYYY-MM-DD') : ''}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
