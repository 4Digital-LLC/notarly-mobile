import Header from '@/components/header';
import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <Header label="Connection" leftComponent />,
        }}
      />
      <Stack.Screen
        name="forgotPassword"
        options={{
          header: () => <Header label="Forgot Password" leftComponent />,
        }}
      />
    </Stack>
  );
}
