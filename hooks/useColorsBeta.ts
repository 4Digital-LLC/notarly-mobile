import { useColorScheme } from 'react-native';
import { theme } from '@/theme/[new]/colors';

const useColorsBeta = () => {
  const scheme = useColorScheme();

  const mode = scheme == 'light' ? theme.light : theme.dark;
  return mode;
};

export default useColorsBeta;
