import * as Colors from './colors';
import * as Typography from './typography';
import * as Sizes from '@/utils/reponsiveSizes';

export { Colors, Typography, Sizes };

export const colors = {
  light: {
    primary: Colors.PRIMARY_700,
    error: Colors.ERROR_600,
    warning: Colors.WARNING_600,
    error_bg: Colors.ERROR_25,
    text: Colors.BLACK,
    text_secondary: Colors.GRAY_IRON_600,
    text_reversed: Colors.WHITE,
    text_tertiary: Colors.GRAY_400,
    label: Colors.BLACK,
    border: Colors.GRAY_200,
    border_secondary: Colors.GRAY_300,
    background: Colors.GRAY_100,
    input_bg: Colors.WHITE,
    placeholder: Colors.GRAY_400,
    header_bg: Colors.WHITE,
    otp_bg: Colors.GRAY_100,
    background_secondary: Colors.WHITE,
    tab_item_icon: Colors.GRAY_600,
    success: Colors.TEAL_600,
    menu: {
      background: Colors.GRAY_100,
      header: Colors.GRAY_IRON_600,
      card_bg: Colors.WHITE,
      card_border: Colors.GRAY_200,
    },
    list: {
      background: Colors.WHITE,
      input_bg: Colors.GRAY_200,
      input_placeholder: Colors.GRAY_500,
    },
    input: {
      border: Colors.GRAY_300,
      background: Colors.WHITE,
    },
    dropdown: {
      item_bg: `${Colors.PRIMARY_700}10`,
      text: Colors.PRIMARY_700,
    },
    list_placeholder: {
      first: Colors.GRAY_100,
      second: Colors.GRAY_200,
      third: Colors.GRAY_300,
    },
    bottomsheet: {
      input_bg: Colors.GRAY_50,
      input_border: Colors.GRAY_200,
    },
    shimmer_placeholder: {
      color1: Colors.GRAY_50,
      color2: Colors.GRAY_100,
      color3: Colors.GRAY_200,
    },
  },
  dark: {
    primary: Colors.PRIMARY_500,
    error: Colors.ERROR_400,
    warning: Colors.WARNING_500,
    error_bg: Colors.BLACK,
    text: Colors.WHITE,
    text_secondary: Colors.GRAY_IRON_400,
    text_tertiary: Colors.GRAY_500,
    text_reversed: Colors.BLACK,
    label: Colors.GRAY_IRON_400,
    border: Colors.GRAY_IRON_800,
    border_secondary: Colors.GRAY_IRON_400,
    background: Colors.BLACK,
    input_bg: Colors.BLACK,
    placeholder: Colors.GRAY_IRON_500,
    header_bg: Colors.GRAY_UNKNOWN_DARK,
    otp_bg: Colors.GRAY_UNKNOWN_DARK,
    background_secondary: Colors.GRAY_UNKNOWN_DARK,
    tab_item_icon: Colors.GRAY_300,
    success: Colors.TEAL_700,
    menu: {
      background: Colors.BLACK,
      header: Colors.BLACK,
      card_bg: Colors.GRAY_IRON_900,
      card_border: Colors.GRAY_IRON_900,
    },
    list: {
      background: Colors.GRAY_IRON_900,
      input_bg: Colors.GRAY_IRON_800,
      input_placeholder: Colors.GRAY_IRON_500,
    },
    input: {
      border: Colors.GRAY_IRON_900,
      background: Colors.GRAY_IRON_800,
    },
    dropdown: {
      item_bg: Colors.PRIMARY_600,
      text: Colors.WHITE,
    },
    list_placeholder: {
      first: '#353535',
      second: '#4b4b4b',
      third: '#626262',
    },
    bottomsheet: {
      input_bg: Colors.GRAY_IRON_700,
      input_border: Colors.GRAY_IRON_800,
    },
    shimmer_placeholder: {
      color1: '#353535',
      color2: '#4b4b4b',
      color3: '#626262',
    },
  },
};
