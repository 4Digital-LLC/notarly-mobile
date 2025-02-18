import { ColorSchemeName } from 'react-native';

export const Colors = {
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#000000',
  primary: {
    25: '#f5f8ff',
    50: '#eff4ff',
    100: '#d1e0ff',
    200: '#b2ccff',
    300: '#84adff',
    400: '#528bff',
    500: '#2970ff',
    600: '#155eef',
    700: '#004eeb',
    800: '#0040c1',
    900: '#00359e',
  },
  gray: {
    25: '#FCFCFD',
    50: '#F9FAFB',
    100: '#F2F4F7',
    200: '#EAECF0',
    300: '#D0D5DD',
    400: '#98A2B3',
    500: '#667085',
    600: '#475467',
    700: '#344054',
    800: '#1D2939',
    900: '#101828',
  },
  grayIron: {
    25: '#fcfcfc',
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d1d1d6',
    400: '#a0a0ab',
    500: '#70707b',
    600: '#51525c',
    700: '#3f3f46',
    800: '#282828',
    900: '#1d1d1d',
  },
  grayWarm: {
    50: '#FAFAF9',
    200: '#E7E5E4',
    700: '#44403C',
  },
  error: {
    25: '#fffbfa',
    50: '#fef3f2',
    100: '#fee4e2',
    200: '#fecdca',
    300: '#fda29b',
    400: '#f97066',
    500: '#f04438',
    600: '#d92d20',
    700: '#b42318',
    800: '#912018',
    900: '#7a271a',
  },
  success: {
    25: '#f6fef9',
    50: '#ecfdf3',
    100: '#d1fadf',
    200: '#a6f4c5',
    300: '#6ce9a6',
    400: '#32d583',
    500: '#12b76a',
    600: '#039855',
    700: '#027a48',
    800: '#05603a',
    900: '#054f31',
  },
  warning: {
    25: '#fffcf5',
    50: '#fffaeb',
    100: '#fef0c7',
    200: '#fedf89',
    300: '#fec84b',
    400: '#fdb022',
    500: '#f79009',
    600: '#dc6803',
    700: '#b54708',
    800: '#93370d',
    900: '#7a2e0e',
  },

  teal: {
    25: '#f6fefc',
    50: '#f0fdf9',
    100: '#ccfbef',
    200: '#99f6e0',
    300: '#5fe9d0',
    400: '#2ed3b7',
    500: '#15b79e',
    600: '#0e9384',
    700: '#107569',
    800: '#125d56',
    900: '#134e48',
  },
  blueDark: {
    25: '#f5f8ff',
    50: '#eff4ff',
    100: '#d1e0ff',
    200: '#b2ccff',
    300: '#84adff',
    400: '#528bff',
    500: '#2970ff',
    600: '#155eef',
    700: '#004eeb',
    800: '#0040c1',
    900: '#00359e',
  },
  orangeDark: {
    50: '#FFF4ED',
    200: '#FFD6AE',
    300: '#ff9c66',
    500: '#FF4405',
    600: '#fe7339',
    700: '#BC1B06',
  },
  blueLight: {
    25: '#F5FBFF',
    50: '#F0F9FF',
    100: '#d1e9ff',
    200: '#B9E6FE',
    300: '#7CD4FD',
    500: '#0ba5ec',
    600: '#0086c9',
    700: '#026AA2',
  },
  fuchsia: {
    25: '#FEFAFF',
    50: '#FDF4FF',
    200: '#F6D0FE',
    500: '#D444F1',
    700: '#9F1AB1',
  },
  violet: {
    50: '#F5F3FF',
    100: '#ECE9FE',
    200: '#DDD6FE',
    400: '#A48AFB',
    600: '#7839EE',
    700: '#6927DA',
    800: '#5720B7',
  },
  rose: {
    50: '#FFF1F3',
    200: '#FECDD6',
    600: '#E31B54',
    700: '#C01048',
  },
  purple: {
    50: '#F4F3FF',
    200: '#D9D6FE',
    500: '#7A5AF8',
    700: '#5925DC',
  },
  yellow: {
    50: '#FEFBE8',
    200: '#FEEE95',
    500: '#EAAA08',
    700: '#A15C07',
  },
  indigo: {
    500: '#6172F3',
  },
  orange: {
    300: '#FF9C66',
  },
  unknown: {
    1: '#F7F7F7',
    2: '#1E1E1E',
    3: '#353535',
    4: '#4b4b4b',
    5: '#626262',
  },
  green: {
    25: '#F6FEF9',
  },
  greenLight: {
    200: '#D0F8AB',
    300: '#A6EF67',
    700: '#3B7C0F',
  },
};

export type ColorsSchema = {
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  primary: string;
  background: {
    primary: string;
    secondary: string;
  };
  error: {
    text: string;
    background: string;
    border: string;
  };
  success: {
    text: string;
    background: string;
    border: string;
  };
  warning: {
    text: string;
    background: string;
  };
  border: {
    primary: string;
    secondary: string;
  };
  placeholder: {
    gradient: string[];
  };
  scheme: ColorSchemeName;
};

type ThemeConfig = {
  light: ColorsSchema;
  dark: ColorsSchema;
};

export const theme: ThemeConfig = {
  light: {
    scheme: 'light',
    text: {
      primary: Colors.black,
      secondary: Colors.grayIron[600],
      tertiary: Colors.gray[400],
    },
    primary: Colors.primary[700],
    background: {
      primary: Colors.white,
      secondary: Colors.gray[50],
    },
    error: {
      text: Colors.error[600],
      background: Colors.error[50],
      border: Colors.error[400],
    },
    success: {
      text: Colors.success[600],
      background: Colors.success[25],
      border: Colors.success[400],
    },
    warning: {
      text: Colors.warning[600],
      background: Colors.warning[25],
    },
    border: {
      primary: Colors.gray[200],
      secondary: Colors.gray[300],
    },
    placeholder: {
      gradient: [Colors.gray[100], Colors.gray[200], Colors.gray[300]],
    },
  },
  dark: {
    scheme: 'dark',
    text: {
      primary: Colors.white,
      secondary: Colors.grayIron[400],
      tertiary: Colors.grayIron[500],
    },
    primary: Colors.primary[500],
    background: {
      primary: Colors.black,
      secondary: Colors.unknown[2],
    },
    error: {
      text: Colors.error[400],
      background: Colors.black,
      border: Colors.error[400],
    },
    success: {
      text: Colors.success[400],
      background: Colors.black,
      border: Colors.success[400],
    },
    warning: {
      text: Colors.warning[400],
      background: Colors.black,
    },
    border: {
      primary: Colors.grayIron[800],
      secondary: Colors.grayIron[700],
    },
    placeholder: {
      gradient: [Colors.unknown[3], Colors.unknown[4], Colors.unknown[5]],
    },
  },
};
