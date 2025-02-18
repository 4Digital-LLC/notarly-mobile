import Button from '@/components/[new]/Button';
import useColors from '@/hooks/useColors';
import {
  INTER_MEDIUM,
  INTER_REGULAR,
  INTER_SEMIBOLD,
} from '@/theme/typography';
import { RH, RW, WIDTH } from '@/utils/reponsiveSizes';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Google from '@/assets/icons/google.svg';
import { GRAY_IRON_400 } from '@/theme/colors';
import Input from '@/components/[new]/Input';
import { isEmail } from '@/utils/regexValidations';
import { router } from 'expo-router';
import Modal from 'react-native-modal';
import { CloseIcon } from '@/utils/icons';
import NotFound from '@/assets/icons/not_found.svg';

const Login = () => {
  const insets = useSafeAreaInsets();
  const colors = useColors();

  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });
  const [googleEmail, setGoogleEmail] = useState('');

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
        Se connecter
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
        Connectez-vous en utilisant votre compte Google ou en saisissant votre
        adresse e-mail et votre mot de passe.
      </Text>
      <Button
        name="Se connecter en utilisant Google"
        onClick={() => {
          // googleSignIn();
        }}
        styles={{
          backgroundColor: colors.input.background,
          borderWidth: 1,
          borderColor: colors.input.border,
        }}
        textStyles={{
          color: colors.text,
        }}
        icon={<Google />}
        // loading={googleLoginMutation.isLoading}
        loaderColor={GRAY_IRON_400}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: RW(2),
          marginVertical: RH(2),
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: colors.border_secondary,
          }}
        />
        <Text
          style={{
            fontFamily: INTER_MEDIUM,
            fontSize: RH(1.5),
            color: colors.text_secondary,
          }}
        >
          Ou
        </Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: colors.border_secondary,
          }}
        />
      </View>
      <View style={{ gap: RH(2.5) }}>
        <Input
          label="Email"
          placeholder="Entrez votre email"
          value={fields.email}
          keyboardType="email-address"
          onChangeText={(text) => {
            setFields({ ...fields, email: text.trim() });
          }}
          validations={['required', 'email']}
        />
        <Input
          label="Mot de passe"
          placeholder="Entrez votre mot de passe"
          value={fields.password}
          isPassword
          onChangeText={(text) => {
            setFields({ ...fields, password: text.trim() });
          }}
          validations={['required']}
          onSubmitPressed={() => {
            if (isEmail(fields.email) && fields.password.length > 0) {
              // mutate({
              //   email: fields.email,
              //   password: fields.password,
              // });
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
          onPress={() => {
            // navigation.navigate('password_recovery', {
            //   name: 'test',
            // });
          }}
        >
          <Text
            style={{
              fontFamily: INTER_MEDIUM,
              fontSize: RH(1.5),
              color: colors.primary,
            }}
          >
            Mot de passe oublié ?
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        name="Se connecter"
        onClick={
          () => {}
          // mutate({
          //   email: fields.email,
          //   password: fields.password,
          // })
        }
        disabled={!isEmail(fields.email) || fields.password.length == 0}
        // loading={isLoading}
      />
      <Button
        name="Créer un nouveau compte"
        onClick={() => router.navigate('/auth/register')}
        styles={{
          backgroundColor: colors.input.background,
          borderWidth: 1,
          borderColor: colors.input.border,
          marginTop: RH(2),
        }}
        textStyles={{
          color: colors.text,
        }}
      />
      <Modal
        animationIn={'fadeInUp'}
        animationOut={'fadeOutDown'}
        animationOutTiming={300}
        useNativeDriver
        hideModalContentWhileAnimating
        isVisible={open}
        avoidKeyboard
        backdropColor={'#00000090'}
        onBackdropPress={() => setOpen(false)}
        onBackButtonPress={() => setOpen(false)}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}
      >
        <View
          style={{
            width: WIDTH * 0.8,
            borderRadius: 8,
            borderCurve: 'continuous',
            backgroundColor: colors.background_secondary,
            alignItems: 'center',
            paddingVertical: RH(2),
            paddingTop: RH(3),
            gap: RH(1),
            paddingHorizontal: RW(4),
          }}
        >
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: RH(5),
              width: RH(5),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CloseIcon height={RH(2)} width={RH(2)} color={colors.text} />
          </TouchableOpacity>
          <NotFound height={RH(15)} width={RH(15)} color={colors.text} />
          <Text
            style={{
              fontFamily: INTER_SEMIBOLD,
              fontSize: RH(2.2),
              color: colors.text,
            }}
          >
            Compte introuvable
          </Text>
          <Text
            style={{
              fontFamily: INTER_REGULAR,
              fontSize: RH(1.4),
              color: colors.text_secondary,
              textAlign: 'center',
            }}
          >
            L'adresse e-mail {googleEmail} n'est associée à aucun compte.
            Veuillez choisir un autre compte ou créer un nouveau compte avec
            l'adresse e-mail que vous avez utilisé.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: RW(2),
              marginTop: RH(1),
            }}
          >
            <Button
              name="Réessayer"
              onClick={() => {
                setOpen(false);
                setTimeout(() => {
                  // googleSignIn();
                }, 300);
              }}
              styles={{
                backgroundColor: colors.input.background,
                borderWidth: 1,
                borderColor: colors.border_secondary,
                height: RH(4),
              }}
              textStyles={{
                color: colors.text,
                fontSize: RH(1.4),
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: RW(2),
              marginTop: RH(0.5),
            }}
          >
            <Button
              name="Créer un compte"
              onClick={() => {
                setOpen(false);
                router.navigate('/auth/register');
              }}
              styles={{
                height: RH(4),
              }}
              textStyles={{
                fontSize: RH(1.4),
              }}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};

export default Login;
