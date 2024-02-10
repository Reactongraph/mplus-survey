import { SelectOptionPropType } from '@/utils/types/types';
import React from 'react';

const MultiSelectOption = ({ children, isActive, serialNumber, handler }: SelectOptionPropType) => {
  return (
    <div
      className={`mb-2 border-2 border-blue-500 rounded-full p-2 ${
        isActive ? 'bg-blue-500' : ''
      } flex items-center`}
      onClick={handler}
    >
      <div
        className={`h-8 w-8 border-2 border-blue-500 rounded-full p-2 mr-5 flex items-center justify-center font-semibold ${
          isActive ? 'text-white border-white' : 'text-blue-500 border-blue-500'
        }`}
      >
        {serialNumber}
      </div>
      <div className={isActive ? 'text-white text-sm' : 'text-#001044-500 text-sm'}>{children}</div>
    </div>
  );
};

export default MultiSelectOption;
