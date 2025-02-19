import Button from '@/components/[new]/Button';
import Input from '@/components/[new]/Input';
import useColors from '@/hooks/useColors';
import {
  INTER_MEDIUM,
  INTER_REGULAR,
  INTER_SEMIBOLD,
} from '@/theme/typography';
import { isEmail } from '@/utils/regexValidations';
import { RH, RW } from '@/utils/reponsiveSizes';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ForgotPassword = () => {
  const colors = useColors();
  const insets = useSafeAreaInsets();

  const [fields, setFields] = useState({
    email: '',
  });

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      style={{
        flex: 1,
        paddingHorizontal: RW(5),
        paddingTop: RH(5),
        paddingBottom: insets.bottom,
        backgroundColor: colors.background,
      }}
    >
      <Text
        style={{
          fontFamily: INTER_SEMIBOLD,
          fontSize: RH(2.6),
          color: colors.text,
          marginBottom: RH(1),
        }}
      >
        Forgot Password
      </Text>
      <Text
        style={{
          fontFamily: INTER_REGULAR,
          fontSize: RH(1.6),
          lineHeight: RH(2.4),
          color: colors.text_secondary,
          marginBottom: RH(2),
        }}
      >
        Reset your account via your address email.
      </Text>
      <View style={{ gap: RH(2.5), marginTop: 20 }}>
        <Input
          label="Email"
          placeholder="Enter your email"
          value={fields.email}
          keyboardType="email-address"
          onChangeText={(text) => {
            setFields({ ...fields, email: text.trim() });
          }}
          validations={['required', 'email']}
        />
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginVertical: RH(2),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.navigate('/auth/login')}
        >
          <Text
            style={{
              fontFamily: INTER_MEDIUM,
              fontSize: RH(1.5),
              color: colors.primary,
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        name="Send Reset Link"
        onClick={
          () => {}
          // mutate({
          //   email: fields.email,
          //   password: fields.password,
          // })
        }
        disabled={!isEmail(fields.email)}
        // loading={isLoading}
      />
    </KeyboardAwareScrollView>
  );
};

export default ForgotPassword;
