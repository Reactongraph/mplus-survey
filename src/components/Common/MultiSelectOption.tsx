import { MultiSelectOptionPropType } from '@/utils/types/types';
import React from 'react';

const MultiSelectOption = ({ children, isActive, serialNumber }: MultiSelectOptionPropType) => {
  return (
    <div
      className={`border-2 border-blue-500 rounded-full p-2 ${
        isActive ? 'bg-blue-500' : ''
      } flex items-center`}
    >
      <div
        className={`h-10 w-10 border-2 border-blue-500 rounded-full p-2 mr-5 flex items-center justify-center font-semibold ${
          isActive ? 'text-white border-white' : 'text-blue-500 border-blue-500'
        }`}
      >
        {serialNumber}
      </div>
      <div className={isActive ? 'text-white' : 'text-blue-500'}>{children}</div>
    </div>
  );
};

export default MultiSelectOption;
