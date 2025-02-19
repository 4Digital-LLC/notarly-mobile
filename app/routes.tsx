import { useAuth } from '@/hooks/useAuth';
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const AppRoutes = () => {
  const { auth, loading } = useAuth();

  useEffect(() => {
    !loading && SplashScreen.hideAsync();
  }, [loading]);

  if (loading) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {auth?.token && auth.role === 'client' ? (
        <Stack.Screen name="(client)" options={{ headerShown: false }} />
      ) : auth?.token ? (
        <Stack.Screen name="(admin)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
};

export default AppRoutes;
{
  /* <Stack.Screen name="+not-found" /> */
}
