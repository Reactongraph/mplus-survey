import React, { ReactNode } from 'react';

const VerticalApart = ({ children, height }: { children: ReactNode; height: string }) => {
  return (
    <div
      style={{
        minHeight: height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      {children}
    </div>
  );
};

export default VerticalApart;
