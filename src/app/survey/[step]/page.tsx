'use client';

import MultiSelectForm from '@/components/Form/MultiSelectForm';
import SingleSelectForm from '@/components/Form/SingleSelectForm';
import useFormStepData from '@/hooks/useFormStepData';
import React from 'react';

type StepPropType = {
  params: {
    step: number;
  };
};

const Step = ({ params }: StepPropType) => {
  const { step } = params;

  const formStepData = useFormStepData(step);

  if (!formStepData) {
    return <></>;
  }

  const { type } = formStepData;
  return (
    <>
      {type === 'singleSelect' && <SingleSelectForm formStepData={formStepData} step={step} />}
      {type === 'multiSelect' && <MultiSelectForm formStepData={formStepData} step={step} />}
    </>
  );
};

export default Step;
