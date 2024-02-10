import { FormDataType } from '@/utils/types/types';
import React, { useState } from 'react';
import SingleSelectOption from '../Common/SingleSelectOption';
import FormQuestion from '../Common/FormQuestion';
import FormSubmit from '../Common/FormSubmit';
import OptionList from '../Common/OptionList';
import VerticalApart from '../Common/VerticalApart';
import { useRouter } from 'next/navigation';

const SingleSelectForm = ({ formStepData, step }: { formStepData: FormDataType; step: number }) => {
  const router = useRouter();
  const { options, question } = formStepData;
  const [selection, setSelection] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelection(id);
  };

  const handleSubmit = () => {
    if (step < 6) {
      router.push(`/survey/${+step + 1}`);
    } else {
      router.push(`/survey/coupon`);
    }
  };
  return (
    <VerticalApart height='500px'>
      <div>
        <FormQuestion text={question} />
        <OptionList>
          {options.map((option, index) => {
            return (
              <SingleSelectOption
                key={option.id}
                serialNumber={index + 1}
                isActive={selection === option.id}
                handler={() => handleSelect(option.id)}
              >
                {option.text}
              </SingleSelectOption>
            );
          })}
        </OptionList>
      </div>

      <FormSubmit disabled={!selection} handler={() => handleSubmit()} />
    </VerticalApart>
  );
};

export default SingleSelectForm;
