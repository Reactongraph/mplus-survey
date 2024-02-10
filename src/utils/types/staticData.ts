import { CouponListType, CouponProvidersListType, FormDataListType } from './types';

const formDataList: FormDataListType = [
  {
    id: 'q1',
    type: 'multiSelect',
    question: 'What is most important to you when shopping for home furnishings?',
    options: [
      {
        id: 'op1',
        text: 'Design/Aesthetic'
      },
      {
        id: 'op2',
        text: 'Quality'
      },
      {
        id: 'op3',
        text: 'Affordability'
      },
      {
        id: 'op4',
        text: 'Eco-Friendly'
      }
    ]
  },
  {
    id: 'q2',
    type: 'singleSelect',
    question: 'Will you be redecorating or furnishing a space this year?',
    options: [
      {
        id: 'op1',
        text: 'Yes'
      },
      {
        id: 'op2',
        text: 'No'
      }
    ]
  },
  {
    id: 'q3',
    type: 'singleSelect',
    question: 'How long do you normally take to review and purchase big furniture items?',
    options: [
      {
        id: 'op1',
        text: '2 weeks or less'
      },
      {
        id: 'op2',
        text: '2-4 weeks'
      },
      {
        id: 'op3',
        text: '4-6 weeks'
      },
      {
        id: 'op4',
        text: '6 weeks or longer'
      }
    ]
  },
  {
    id: 'q4',
    type: 'multiSelect',
    question: 'What is your top priority for your space in 2024?',
    options: [
      {
        id: 'op1',
        text: 'A simple refresh of my space with (smaller) décor items'
      },
      {
        id: 'op2',
        text: 'Complete redesign of my space with (larger) feature items'
      },
      {
        id: 'op3',
        text: 'Optimize what I have with smart accessories'
      },
      {
        id: 'op4',
        text: 'Declutter and organize my space with storage'
      }
    ]
  },
  {
    id: 'q5',
    type: 'singleSelect',
    question: 'What room are you most likely to redecorate or upgrade this year?',
    options: [
      {
        id: 'op1',
        text: 'Kitchen'
      },
      {
        id: 'op2',
        text: 'Bedroom'
      },
      {
        id: 'op3',
        text: 'Living Room'
      },
      {
        id: 'op4',
        text: 'Home Office/Ent Room'
      }
    ]
  },
  {
    id: 'q6',
    type: 'singleSelect',
    question: 'Are you more likely to shop in store or online?',
    options: [
      {
        id: 'op1',
        text: 'In Store'
      },
      {
        id: 'op2',
        text: 'Online'
      }
    ]
  }
];

export const formElementByStep: any = {
  1: formDataList[0],
  2: formDataList[1],
  3: formDataList[2],
  4: formDataList[3],
  5: formDataList[4],
  6: formDataList[5]
};

export const couponProviders: CouponProvidersListType = [
  {
    id: 'cp1',
    provider: 'tim horton',
    image: '/images/timhortons.png'
  },
  {
    id: 'cp2',
    provider: 'starbucks',
    image: '/images/starbucks.png'
  }
];

export const coupons: CouponListType = [
  {
    id: 'c1',
    code: 'CODE123',
    provider: 'cp1',
    availableCount: 100
  },
  {
    id: 'c2',
    code: 'CODE456',
    provider: 'cp2',
    availableCount: 100
  }
];
