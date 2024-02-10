import React from 'react';

const FormQuestion = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        fontWeight: 700,
        marginTop: '10px',
        marginBottom: '10px',
        fontSize: '14px'
      }}
    >
      {text}
    </div>
  );
};

export default FormQuestion;
