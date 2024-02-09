import { SelectionChipPropType } from '@/utils/types/types';
import React from 'react';

const SelectionChip = ({ children, isActive }: SelectionChipPropType) => {
  return (
    <div
      style={{
        // padding: "5px 10px 10px 5px",
        padding: '5px 25px',
        border: '2px solid',
        borderColor: '#297AFC4D',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </div>
  );
};

export default SelectionChip;
