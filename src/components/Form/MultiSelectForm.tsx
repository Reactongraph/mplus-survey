import { FormDataType } from '@/utils/types/types';
import React, { useState } from 'react';
import MultiSelectOption from '../Common/MultiSelectOption';
import SelectionChip from '../Common/SelectionChip';
import FormQuestion from '../Common/FormQuestion';
import ChipList from '../Common/ChipList';
import FormSubmit from '../Common/FormSubmit';
import OptionList from '../Common/OptionList';
import VerticalApart from '../Common/VerticalApart';
import { useRouter } from 'next/navigation';

const MultiSelectForm = ({ formStepData, step }: { formStepData: FormDataType; step: number }) => {
  const router = useRouter();
  const { options, question } = formStepData;
  const [selections, setSelections] = useState<string[]>([]);

  const handleSelect = (id: string) => {
    setSelections((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
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
              <MultiSelectOption
                key={option.id}
                serialNumber={index + 1}
                isActive={selections.includes(option.id)}
                handler={() => handleSelect(option.id)}
              >
                {option.text}
              </MultiSelectOption>
            );
          })}
        </OptionList>
        <ChipList>
          {options.map((option, index) => {
            return (
              <SelectionChip key={option.id} isActive={!selections.includes(option.id)}>
                {option.text}
              </SelectionChip>
            );
          })}
        </ChipList>
      </div>
      <FormSubmit disabled={selections.length <= 0} handler={() => handleSubmit()} />
    </VerticalApart>
  );
};

export default MultiSelectForm;
