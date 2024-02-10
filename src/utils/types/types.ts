export type SelectOptionPropType = {
  children: string;
  isActive?: boolean;
  serialNumber: number;
  handler: () => void;
};

export type SelectionChipPropType = {
  children: string;
  isActive?: boolean;
};

export type formQuestionOptionsType = {
  id: string;
  text: string;
};

export type FormDataType = {
  id: string;
  type: 'singleSelect' | 'multiSelect';
  question: string;
  options: formQuestionOptionsType[];
};

export type FormDataListType = FormDataType[];

export type CouponProvidersType = {
  id: string;
  provider: string;
  image: string;
};

export type CouponProvidersListType = CouponProvidersType[];

export type CouponType = {
  id: string;
  code: string;
  provider: string;
  availableCount: number;
};

export type CouponListType = CouponType[];
