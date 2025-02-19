import Button from '@/components/[new]/Button';
import useColors from '@/hooks/useColors';
import {
  INTER_MEDIUM,
  INTER_REGULAR,
  INTER_SEMIBOLD,
} from '@/theme/typography';
import { RH, RW } from '@/utils/reponsiveSizes';
import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Input from '@/components/[new]/Input';
import { isEmail } from '@/utils/regexValidations';
import { router } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import { useMutation } from 'react-query';
import { postLogin } from '@/apis/auth';
import { ToastContext } from '@/context/toast.context';
import { AxiosError } from 'axios';

const Login = () => {
  const insets = useSafeAreaInsets();
  const colors = useColors();
  const { login } = useAuth();
  const { showToast } = useContext(ToastContext);

  const [fields, setFields] = useState({
    email: '',
    password: '',
    subdomain: '',
  });

  const { mutate, isLoading, error } = useMutation(postLogin, {
    onSuccess: (res) => {
      console.log('res *_*_*_*_*_*', res.data);
      if (res.data.emailVerifiedAt) {
        login({
          token: res.data.token,
          role: res.data.role.key,
          user: {
            username: res.data.username,
            email: res.data.email,
          },
        });
        // router.navigat
      } else {
        showToast('Email is not virified', 'error');
      }
    },
    onError: (err: AxiosError) => {
      showToast('Email or password is incorrect', 'error');
    },
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
        Log In
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
        Log in to your account via your subdomain, email address and your
        password.
      </Text>
      <View style={{ gap: RH(2.5), marginTop: 20 }}>
        <Input
          label="Subdomain"
          placeholder="Enter your subdomain"
          value={fields.subdomain}
          keyboardType="default"
          onChangeText={(text) => {
            setFields({ ...fields, subdomain: text.trim() });
          }}
          validations={['required']}
        />
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
        <Input
          label="Passowrd"
          placeholder="Enter your password"
          value={fields.password}
          isPassword
          onChangeText={(text) => {
            setFields({ ...fields, password: text.trim() });
          }}
          validations={['required']}
          onSubmitPressed={() => {
            if (
              isEmail(fields.email) &&
              fields.password.length > 0 &&
              fields.subdomain.length == 0
            ) {
              mutate({
                email: fields.email,
                password: fields.password,
              });
            }
          }}
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
          onPress={() => router.navigate('/(auth)/forgotPassword')}
        >
          <Text
            style={{
              fontFamily: INTER_MEDIUM,
              fontSize: RH(1.5),
              color: colors.primary,
            }}
          >
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        name="Log In"
        onClick={() => {
          mutate({
            email: fields.email,
            password: fields.password,
          });
        }}
        disabled={
          !isEmail(fields.email) ||
          fields.password.length == 0 ||
          fields.subdomain.length == 0
        }
        loading={isLoading}
      />
    </KeyboardAwareScrollView>
  );
};

export default Login;
