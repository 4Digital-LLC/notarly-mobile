import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { QueryClient, QueryClientProvider } from 'react-query';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'Inter-Light': require('../assets/fonts/Inter/Inter-Light.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter/Inter-ExtraBold.ttf'),
    'Bagoss-Regular': require('../assets/fonts/Bagoss/BagossStandardTRIAL-Regular.ttf'),
    'Bagoss-Medium': require('../assets/fonts/Bagoss/BagossStandardTRIAL-Medium.ttf'),
    'Bagoss-Bold': require('../assets/fonts/Bagoss/BagossStandardTRIAL-Bold.ttf'),
    'Bagoss-Light': require('../assets/fonts/Bagoss/BagossStandardTRIAL-Light.ttf'),
  });

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: true },
    },
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
