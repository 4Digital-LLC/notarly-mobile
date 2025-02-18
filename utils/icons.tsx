import React from 'react';
import Back from '@/assets/icons/chevron-left.svg';
import Eye from '@/assets/icons/eye.svg';
import EyeOff from '@/assets/icons/eye-off.svg';
import Close from '@/assets/icons/close.svg';

type IconType = {
  color?: string;
  height?: number;
  width?: number;
  selected?: boolean;
};

export const BackIcon = ({ color = '#344054', height, width }: IconType) => (
  <Back fill={color} height={height} width={width} />
);
export const EyeIcon = ({ color = '#98A2B3', height, width }: IconType) => (
  <Eye
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    height={height}
    width={width}
  />
);
export const EyeOffIcon = ({ color = '#98A2B3', height, width }: IconType) => (
  <EyeOff
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    height={height}
    width={width}
  />
);
export const CloseIcon = ({
  color = '#344054',
  height = 20,
  width = 20,
}: IconType) => <Close color={color} height={height} width={width} />;
