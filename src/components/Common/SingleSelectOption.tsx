import { SelectOptionPropType } from '@/utils/types/types';
import Image from 'next/image';
import React from 'react';

const SingleSelectOption = ({
  children,
  isActive,
  serialNumber,
  handler
}: SelectOptionPropType) => {
  return (
    <div
      className={`relative mb-2 border-2 border-blue-500 rounded-md p-2 ${
        isActive ? 'bg-blue-500' : ''
      } flex items-center`}
      onClick={handler}
    >
      <div
        style={{
          position: 'absolute'
        }}
      >
        {isActive ? (
          <div
            style={{
              margin: '8px'
            }}
          >
            <Image src='/images/blue-tick.png' alt='blue-tick.png' height={20} width={20} />
          </div>
        ) : (
          <div
            style={{
              height: '18px',
              width: '18px',
              border: '3px solid #297AFC',
              borderRadius: '50%',
              margin: '8px'
            }}
          ></div>
        )}
      </div>

      <div
        className={`text-center flex-grow ${isActive ? 'text-white text-sm' : 'text-#001044-500 text-sm'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SingleSelectOption;
