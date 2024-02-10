import React from 'react';
import Button from './Button';

type FormSubmitPropType = {
  handler: () => void;
  text?: string;
  disabled?: boolean;
};

const FormSubmit = ({ handler, text = 'Submit', disabled = false }: FormSubmitPropType) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginLeft: '20px'
        }}
      >
        <div
          style={{
            height: '8px',
            width: '8px',
            backgroundColor: '#297AFC4D',
            borderRadius: '50%'
          }}
        ></div>
        <div
          style={{
            height: '8px',
            width: '24px',
            backgroundColor: '#297AFC',
            borderRadius: '4px'
          }}
        ></div>
        <div
          style={{
            height: '8px',
            width: '8px',
            backgroundColor: '#297AFC4D',
            borderRadius: '50%'
          }}
        ></div>
      </div>
      <div>
        <Button disabled={disabled} handler={handler}>
          {text}
        </Button>
      </div>
    </div>
  );
};

export default FormSubmit;
