import { truncateString } from '@/utils/types/helpers';
import { SelectionChipPropType } from '@/utils/types/types';
import React from 'react';

const SelectionChip = ({ children, isActive }: SelectionChipPropType) => {
  return (
    <div
      style={{
        fontSize: '14px',
        padding: '5px 25px',
        border: '2px solid',
        borderRadius: '30px',
        ...(isActive
          ? { background: '#297AFC', color: 'white', borderColor: '#297AFC' }
          : { borderColor: '#297AFC4D', color: '#297AFC4D' })
      }}
    >
      {truncateString(children)}
    </div>
  );
};

export default SelectionChip;
