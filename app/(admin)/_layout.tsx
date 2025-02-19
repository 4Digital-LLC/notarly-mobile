import Header from '@/components/header';
import { Stack } from 'expo-router';
import React from 'react';

export default function AdminLayout() {
  return (
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
