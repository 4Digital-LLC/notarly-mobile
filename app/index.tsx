import { useAuth } from '@/hooks/useAuth';
import { Redirect } from 'expo-router';
import React from 'react';

export default function Index() {
  const { auth } = useAuth();

  if (!auth) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Redirect
      href={auth.role === 'client' ? '/(client)/home' : '/(admin)/home'}
    />
  );
}
