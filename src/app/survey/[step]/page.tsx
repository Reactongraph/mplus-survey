'use client';

import MultiSelectForm from '@/components/Form/MultiSelectForm';
import SingleSelectForm from '@/components/Form/SingleSelectForm';
import useFormStepData from '@/hooks/useFormStepData';
import React from 'react';

type StepPropType = {
  params: {
    step: number;
  };
  searchParams: { token: string };
};

const Step = ({ params, searchParams }: StepPropType) => {
  const { step } = params;
  const { token } = searchParams;

  const formStepData = useFormStepData(step);

  if (!formStepData) {
    return <></>;
  }

  const { type } = formStepData;
  return (
    <>
      {type === 'singleSelect' && (
        <SingleSelectForm formStepData={formStepData} step={step} token={token} />
      )}
      {type === 'multiSelect' && (
        <MultiSelectForm formStepData={formStepData} step={step} token={token} />
      )}
    </>
  );
};

export default Step;
