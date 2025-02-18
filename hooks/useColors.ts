import { useColorScheme } from 'react-native';
import { colors } from '@/theme';

const useColors = () => {
  const scheme = useColorScheme();

  const mode = scheme == 'light' ? colors.light : colors.dark;
  return mode;
};

export default useColors;
