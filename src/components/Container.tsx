import Image from 'next/image';
import React from 'react';
import MultiSelectOption from './Common/MultiSelectOption';
import SelectionChip from './Common/SelectionChip';

const Container = () => {
  return (
    <div
      style={{
        border: '1px solid black'
      }}
    >
      <div
        style={{
          background: 'linear-gradient(109.04deg, #001044 5.66%, #297AFC 119.79%)',
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          src='/images/precision-light.png'
          alt='precision-light.png'
          width={185.5}
          height={49}
        />
      </div>
      <div
        style={{
          textAlign: 'center',
          fontWeight: 700,
          marginTop: '10px'
        }}
        className='font-sans'
      >
        What is most important to you when shopping for home furnishings?
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        <MultiSelectOption isActive={true} serialNumber={1}>
          Some option
        </MultiSelectOption>
        <MultiSelectOption serialNumber={2}>Some option</MultiSelectOption>
        <MultiSelectOption serialNumber={3}>Some option</MultiSelectOption>
        <MultiSelectOption serialNumber={4}>Some option</MultiSelectOption>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}
      >
        <SelectionChip isActive={true}>Some option</SelectionChip>
        <SelectionChip>Some option</SelectionChip>
        <SelectionChip>Some option</SelectionChip>
        <SelectionChip>Some option</SelectionChip>
      </div>
    </div>
  );
};

export default Container;

// width: 304.5px
// height: 44.45px
// padding: 8.05px, 135.25px, 6.65px, 11.55px
// border-radius: 105px
// border: 2.1px
// gap: 8.4px
