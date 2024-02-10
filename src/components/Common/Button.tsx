'use client';

import React, { ReactNode } from 'react';

type ButtonPropsType = {
  disabled?: boolean;
  children: ReactNode | string;
  handler?: () => void;
  rounded?: boolean;
  varient?: string;
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  As?: React.ElementType;
  otherProps?: any;
};

const varientColorMap: any = {
  v1: {
    bgColor: '#297AFC',
    color: 'white',
    disabledBgColor: '#297AFC4D',
    disabledColor: 'white'
  },
  v2: {
    bgColor: '#EAEAEB',
    color: '#404040'
  },
  v3: {
    bgColor: 'white',
    color: '#297AFC'
  },
  v4: {
    bgColor: 'white',
    color: '#297AFC'
  }
};

const Button = ({
  disabled,
  children,
  handler = () => {},
  rounded = false,
  varient = 'v1',
  textTransform = 'uppercase',
  As: Component = 'button',
  otherProps = {}
}: ButtonPropsType) => {
  return (
    <Component
      style={{
        padding: '12px 30px',
        borderRadius: rounded ? '22px' : '8px',
        color: varientColorMap[varient].color,
        textTransform: textTransform,
        fontWeight: 700,
        fontSize: '14px',
        ...(disabled
          ? { backgroundColor: varientColorMap[varient].disabledBgColor }
          : { backgroundColor: varientColorMap[varient].bgColor })
      }}
      disabled={disabled}
      onClick={handler}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

export default Button;
