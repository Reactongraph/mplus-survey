import Link from 'next/link';
import React, { useState } from 'react';

const useTnc = () => {
  const [isFirstSelected, setIsFirstSelected] = useState(false);
  const [isSecondSelected, setIsSecondSelected] = useState(false);

  return {
    TncComponent: (
      <div>
        <div className='flex items-center gap-6 mb-5'>
          <input
            type='checkbox'
            checked={isFirstSelected}
            onClick={(e: any) => setIsFirstSelected(e.target.checked)}
          />{' '}
          <p className='text-xs'>
            I have read and agree to the uses of my
            {/* <Link style={{ color: 'blue' }} href='/privacy-policy'> */}
            information by Precision Research in
            {/* </Link>{' '} */}
            accordance with its{' '}
            <Link style={{ color: 'blue' }} href='/privacy-policy'>
              Privacy Policy
            </Link>{' '}
          </p>
        </div>
        {/* <div className='flex items-center gap-6'>
          <input
            type='checkbox'
            checked={isSecondSelected}
            onClick={(e: any) => setIsSecondSelected(e.target.checked)}
          />{' '}
          <p className='text-xs'>I agree to receive marketing communication from SMO TEST.</p>
        </div> */}
      </div>
    ),
    isAccepted: isFirstSelected
  };
};

export default useTnc;
