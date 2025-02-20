import Header from '@/components/header';
import { useAuth } from '@/hooks/useAuth';
import { Redirect, Slot, Stack } from 'expo-router';
import React from 'react';

export default function ClientLayout() {
  const { auth } = useAuth();

  if (!auth) {
    return <Redirect href="/auth" />;
  }
  if (auth && auth.role !== 'client') {
    return <Redirect href="/admin" />;
  }

  return (
    // <Slot />
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          header: () => <Header label="Client Home" leftComponent />,
        }}
      />
      <Stack.Screen
        name="menu"
        options={{
          header: () => <Header label="Client Menu" leftComponent />,
        }}
      />
    </Stack>
  );
}
