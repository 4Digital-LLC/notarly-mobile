import { useColorScheme } from '@/hooks/useColorScheme';
import { RH, RW } from '@/utils/reponsiveSizes';
import React from 'react';
import { Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Login = () => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      style={{
        flex: 1,
        paddingHorizontal: RW(5),
        paddingTop: RH(5),
        paddingBottom: insets.bottom,
        backgroundColor: '#fff',
      }}
    >
      <Text
        style={{
          // fontFamily: INTER_SEMIBOLD,
          fontSize: RH(2.6),
          color: '#000',
          marginBottom: RH(1),
        }}
      >
        Se connecter
      </Text>
      <Text
        style={{
          // fontFamily: INTER_REGULAR,
          fontSize: RH(1.6),
          lineHeight: RH(2.4),
          color: '#000',
          marginBottom: RH(2),
        }}
      >
        Connectez-vous en utilisant votre compte Google ou en saisissant votre
        adresse e-mail et votre mot de passe.
      </Text>
    </KeyboardAwareScrollView>
  );
};

export default Login;
