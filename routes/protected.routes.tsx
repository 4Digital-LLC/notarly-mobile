import { useAuth } from '@/hooks/useAuth';
import { Redirect, Slot, useSegments } from 'expo-router';
import { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { auth } = useAuth();
  const segments = useSegments();

  if (!auth) {
    return <Redirect href="/(auth)" />;
  }

  if (segments[0] === '(admin)' && auth.role !== 'admin') {
    return <Redirect href="/(client)" />;
  }

  if (segments[0] === '(client)' && auth.role !== 'client') {
    return <Redirect href="/(admin)" />;
  }

  return <Slot />;
}
