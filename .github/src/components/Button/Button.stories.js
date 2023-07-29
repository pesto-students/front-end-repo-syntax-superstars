import React from 'react';
import { PrimaryButton, SmallButton, SecondaryButton, ButtonIcon } from './Button';

export default {
  title: 'Button',
  // component: Button,
};

export const Primary = () => <PrimaryButton label="Primary Button" height="60px" />
export const Small = () => <SmallButton label="Small Button" size="small" height="40px" />
export const Secondary = () => <SecondaryButton label="Secondary Button" />
export const ButtonwithIcon = () => <ButtonIcon label="Icon Button" />
