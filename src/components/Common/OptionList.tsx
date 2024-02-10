import { ReactNode } from 'react';

const OptionList = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        marginBottom: '10px',
        minHeight: '200px'
      }}
    >
      {children}
    </div>
  );
};

export default OptionList;
