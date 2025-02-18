import Header from '@/components/header';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
  );
}
