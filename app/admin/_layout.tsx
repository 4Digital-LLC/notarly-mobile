import Header from '@/components/header';
import { useAuth } from '@/hooks/useAuth';
import { Redirect, Slot, Stack } from 'expo-router';
import React from 'react';

export default function AdminLayout() {
  const { auth } = useAuth();

  if (!auth) {
    return <Redirect href="/auth" />;
  }
  if (auth && auth.role === 'client') {
    return <Redirect href="/client" />;
  }

  return (
    // <Slot />
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <Header label="Admin Home" leftComponent />,
        }}
      />
      <Stack.Screen
        name="menu"
        options={{
          header: () => <Header label="Admin Menu" leftComponent />,
        }}
      />
    </Stack>
  );
}
