'use client';

import FullScreenLoader from '@/components/Loaders/FullScreenLoader';
import Modal from '@/components/Model';
import useRequest from '@/hooks/useRequest';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const User = () => {
  const { request, response, isLoading } = useRequest();
  const [list, setList] = useState([]);
  const [selectedUser, setSelectedUser] = useState<null | any>(null);

  useEffect(() => {
    request('GET', 'user/list');
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
        <h2 className='text-center font-semibold  text-lg'>Users</h2>
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
                    Email
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Status
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Completed On
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Coupon
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Answers
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
                        {elem.email}
                      </th>
                      <th
                        scope='row'
                        className={`px-6 py-4 font-medium text-${elem?.coupon ? 'success' : 'red-500'}`}
                      >
                        {elem?.coupon ? 'Completed' : 'Not Completed'}
                      </th>
                      <td className='px-6 py-4'>
                        {elem?.surveyCompleteDate
                          ? moment(elem.surveyCompleteDate).format('YYYY-MM-DD')
                          : ''}
                      </td>
                      <td className='px-6 py-4'>{elem?.coupon?.code || ''}</td>
                      <td className='px-6 py-4 text-blue5'>
                        {elem?.coupon ? (
                          <span className='cursor-pointer' onClick={() => setSelectedUser(elem)}>
                            View
                          </span>
                        ) : (
                          ''
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal
        width={1 / 2}
        isOpen={selectedUser ? true : false}
        onClose={() => setSelectedUser(null)}
      >
        <div>
          <div className='text-center font-semibold mb-8 text-lg'>User Selections</div>
          <div className=''>
            {selectedUser &&
              selectedUser.profilingQuestions.map((elem: any, ind: number) => {
                return (
                  <div className='mb-5' key={ind}>
                    <p className='font-semibold'>{elem.question}</p>
                    <p>
                      {elem?.answer &&
                        elem.answer.split(',').map((subelem: any, sunInd: number) => {
                          return <p key={sunInd}>{subelem}</p>;
                        })}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default User;
