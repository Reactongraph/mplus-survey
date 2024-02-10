import React, { ReactNode } from 'react';

const ChipList = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '20px'
      }}
    >
      {children}
    </div>
  );
};

export default ChipList;
