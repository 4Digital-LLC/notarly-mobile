import { Dimensions, PixelRatio } from 'react-native';

export const HEIGHT = Dimensions.get('screen').height;
export const WIDTH = Dimensions.get('screen').width;

export const RH = (percentage: number) => (HEIGHT * percentage) / 100;

export const RW = (percentage: number) => (WIDTH * percentage) / 100;

export const WHAT_PERCENT_OF = (TheBigNumber: number, TheSmallNumber: number) =>
  (TheSmallNumber / TheBigNumber) * 100;

export const RIH = (
  originWith: number,
  originHight: number,
  newWidth: number,
) => {
  var imageResponsiveHight = newWidth * (originHight / originWith);
  return imageResponsiveHight;
};

export const RIW = (
  originWith: number,
  originHight: number,
  newHeight: number,
) => {
  var imageResponsiveWidth = newHeight * (originWith / originHight);
  return imageResponsiveWidth;
};

const fontScale = PixelRatio.getFontScale();
export const getFontSize = (size: number) => size / fontScale;
