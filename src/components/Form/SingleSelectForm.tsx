import { FormDataType, formQuestionOptionsType } from '@/utils/types/types';
import React, { useEffect, useState } from 'react';
import SingleSelectOption from '../Common/SingleSelectOption';
import FormQuestion from '../Common/FormQuestion';
import FormSubmit from '../Common/FormSubmit';
import OptionList from '../Common/OptionList';
import VerticalApart from '../Common/VerticalApart';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import useRequest from '@/hooks/useRequest';

const SingleSelectForm = ({
  formStepData,
  step,
  token
}: {
  formStepData: FormDataType;
  step: number;
  token: string;
}) => {
  const router = useRouter();
  const { options, question } = formStepData;
  const [selection, setSelection] = useState<formQuestionOptionsType | null>(null);
  const { request, response, isLoading } = useRequest();

  const handleSelect = (option: formQuestionOptionsType) => {
    setSelection(option);
  };

  const handleSubmit = () => {
    let answer = `${selection?.id} - ${selection?.text}`;

    request('PATCH', `user`, {
      profilingQuestions: { question, answer },
      surveyStep: step
    });
  };

  useEffect(() => {
    async function call() {
      if (response) {
        if (step < 6) {
          router.push(`/survey/${+step + 1}?token=${token}`);
        } else {
          await request('GET', `coupon/providers`);
          if (response === null || response.length === 0) {
            toast.error('Contact admin: No coupons left.');
          } else {
            if (response) {
              router.push(`/survey/coupon?token=${token}`);
            }
          }
        }
      }
    }

    call();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);
  return (
    <VerticalApart height='80svh'>
      <div>
        <FormQuestion text={question} />
        <OptionList>
          {options.map((option, index) => {
            return (
              <SingleSelectOption
                key={option.id}
                serialNumber={index + 1}
                isActive={selection?.id === option.id}
                handler={() => handleSelect(option)}
              >
                {option.text}
              </SingleSelectOption>
            );
          })}
        </OptionList>
      </div>

      <FormSubmit loading={isLoading} disabled={!selection} handler={() => handleSubmit()} />
    </VerticalApart>
  );
};

export default SingleSelectForm;
