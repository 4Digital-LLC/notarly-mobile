import { useAuth } from '@/hooks/useAuth';
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
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
      {auth ? (
        auth.role === 'client' ? (
          <Stack.Screen name="client" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="admin" options={{ headerShown: false }} />
        )
      ) : (
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      )}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default AppRoutes;
