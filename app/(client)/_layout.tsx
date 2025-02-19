import Header from '@/components/header';
import { Stack } from 'expo-router';
import React from 'react';

export default function ClientLayout() {
  return (
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
