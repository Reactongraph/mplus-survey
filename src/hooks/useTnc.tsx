'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const useTnc = () => {
  const [isFirstSelected, setIsFirstSelected] = useState(false);
  const [isSecondSelected, setIsSecondSelected] = useState(false);
  const TncComponent = (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '10px' }}>
        <input
          type='checkbox'
          checked={isFirstSelected}
          onClick={(e: any) => setIsFirstSelected(e.target.checked)}
        />{' '}
        <p style={{ fontSize: '12px' }}>
          By clicking continue, I agree to the{' '}
          <Link style={{ color: 'blue' }} href='/privacy-policy'>
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link style={{ color: 'blue' }} href='/terms-conditions'>
            Terms of Use
          </Link>{' '}
          of SmartMedia Technologies.
        </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <input
          type='checkbox'
          checked={isSecondSelected}
          onClick={(e: any) => setIsSecondSelected(e.target.checked)}
        />{' '}
        <p style={{ fontSize: '12px' }}>
          I agree to receive marketing communication from SMO TEST.
        </p>
      </div>
    </div>
  );
  return {
    TncComponent,
    isAccepted: isFirstSelected && isSecondSelected
  };
};

export default useTnc;
