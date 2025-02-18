import React from 'react';
import Back from '@/assets/icons/chevron-left.svg';
import { Text } from 'react-native';

type IconType = {
  color?: string;
  height?: number;
  width?: number;
  selected?: boolean;
};

export const BackIcon = ({ color = '#344054', height, width }: IconType) => (
  <Back fill={color} height={height} width={width} />
);
