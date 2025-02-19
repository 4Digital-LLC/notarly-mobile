import useColorsBeta from '@/hooks/useColorsBeta';
import { Colors } from '@/theme/[new]/colors';
import { INTER_MEDIUM, INTER_REGULAR } from '@/theme/typography';
import { EyeIcon, EyeOffIcon } from '@/utils/icons';
import { isAlphabetical, isEmail, isUrl } from '@/utils/regexValidations';
import { RH, RW } from '@/utils/reponsiveSizes';
import React, { useState } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import Alert from '@/assets/icons/alert.svg';

type ValidationType =
  | 'required'
  | 'email'
  | 'alphabetical'
  | 'url'
  | 'max'
  | 'min'
  | 'number'
  | 'equal';

interface InputProps {
  label: string;
  placeholder: string;
  isPassword?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
  value: string;
  disabled?: boolean;
  icon?: any;
  labelStyle?: StyleProp<TextStyle>;
  multiline?: boolean;
  styles?: StyleProp<ViewStyle>;
  validations?: ValidationType[];
  min?: number;
  max?: number;
  equal?: number;
  warning?: string;
  hideLabel?: boolean;
  onSubmitPressed?: () => void;
}

const Input = ({
  label,
  placeholder,
  isPassword = false,
  keyboardType = 'default',
  onChangeText,
  value,
  disabled = false,
  icon,
  labelStyle,
  multiline,
  styles,
  validations = [],
  min = 3,
  max = 10,
  equal,
  warning,
  hideLabel,
  onSubmitPressed,
}: InputProps) => {
  const _colors = useColorsBeta();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  return (
    <Animated.View layout={LinearTransition}>
      {!hideLabel && (
        <Text
          numberOfLines={1}
          style={[
            {
              fontFamily: INTER_MEDIUM,
              fontSize: RH(1.5),
              lineHeight: RH(1.7),
              marginBottom: RH(1),
              color: warning
                ? _colors.warning.text
                : error
                ? _colors.error.text
                : _colors.text.primary,
            },
            labelStyle,
          ]}
        >
          {warning ? warning : error ? error : label}
        </Text>
      )}
      <View
        style={[
          {
            flexDirection: 'row',
            width: '100%',
            borderWidth: 1,
            borderColor: warning
              ? _colors.warning.text
              : error
              ? _colors.error.text
              : _colors.scheme == 'light'
              ? _colors.border.secondary
              : Colors.grayIron[800],
            borderRadius: 5,
            height: multiline ? RH(12) : RH(4.2),
            paddingHorizontal: RW(2.5),
            paddingTop: multiline ? RH(0.8) : 0,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor:
              _colors.scheme == 'light'
                ? _colors.background.primary
                : Colors.grayIron[800],
            opacity: disabled ? 0.5 : 1,
          },
          styles,
        ]}
      >
        <TextInput
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'center'}
          style={{
            fontFamily: INTER_REGULAR,
            fontSize: RH(1.5),
            lineHeight: RH(1.7),
            width: multiline ? '100%' : '90%',
            height: '100%',
            color: _colors.text.primary,
          }}
          selectionColor={_colors.primary}
          secureTextEntry={isPassword ? !showPassword : false}
          keyboardType={keyboardType}
          onChangeText={(text) => {
            onChangeText(text.trim().length == 0 ? text.trim() : text);
            setError('');
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={_colors.text.tertiary}
          editable={!disabled}
          onSubmitEditing={onSubmitPressed}
          onBlur={() => {
            for (let i = 0; i < validations.length; i++) {
              if (validations[i] == 'required') {
                if (value.length == 0) {
                  setError(`${label} is required`);
                  break;
                } else {
                  setError('');
                }
              } else if (validations[i] == 'email') {
                if (!isEmail(value)) {
                  setError(`Invalid email format`);
                  break;
                } else {
                  setError('');
                }
              } else if (validations[i] == 'alphabetical') {
                if (!isAlphabetical(value)) {
                  setError(`${label} must be alphabetical`);
                  break;
                } else {
                  setError('');
                }
              } else if (validations[i] == 'url') {
                if (!isUrl(value)) {
                  setError(`${label} must be a valid URL`);
                  break;
                } else {
                  setError('');
                }
              } else if (validations[i] == 'min') {
                if (value.length < min) {
                  setError(`${label} should contain atleast ${min} characters`);
                  break;
                } else {
                  setError('');
                }
              } else if (validations[i] == 'max') {
                if (value.length > max) {
                  setError(
                    `${label} should contain lower than ${max} characters`,
                  );
                  break;
                } else {
                  setError('');
                }
              } else if (validations[i] == 'number') {
                if (isNaN(value as any)) {
                  setError(`${label} must be a number`);
                  break;
                } else {
                  setError('');
                }
              } else if (validations[i] == 'equal') {
                if (value.length != equal) {
                  setError(`${label} should contain ${equal} numbers`);
                  break;
                } else {
                  setError('');
                }
              } else {
                setError('');
                break;
              }
            }
          }}
        />
        {isPassword && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            {!showPassword ? (
              <EyeOffIcon
                color={error ? _colors.error.text : _colors.text.tertiary}
                height={RH(2)}
                width={RH(2)}
              />
            ) : (
              <EyeIcon
                color={error ? _colors.error.text : _colors.text.tertiary}
                height={RH(2)}
                width={RH(2)}
              />
            )}
          </TouchableOpacity>
        )}
        {error && !isPassword ? (
          <Alert color={_colors.error.text} height={RH(1.8)} width={RH(1.8)} />
        ) : (
          icon && icon
        )}
      </View>
    </Animated.View>
  );
};

export default Input;
