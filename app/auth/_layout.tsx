import Header from '@/components/header';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          header: () => <Header label={'Connexion'} leftComponent />,
        }}
      />
      <Stack.Screen
        name="register"
        options={{ title: 'Register', headerShown: false }}
      />
    </Stack>
  );
}
