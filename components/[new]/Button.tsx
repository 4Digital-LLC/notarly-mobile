import ScaleAnimation from '@/animations/ScaleAnimation';
import useColors from '@/hooks/useColors';
import { BLACK, WHITE } from '@/theme/colors';
import { INTER_MEDIUM } from '@/theme/typography';
import { RH, RW } from '@/utils/reponsiveSizes';
import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Animated, { LinearTransition, ZoomIn } from 'react-native-reanimated';

interface ButtonProps {
  name?: string;
  loading?: boolean;
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  outline?: boolean;
  textSize?: number;
  styles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  loaderColor?: string;
  disabledAnimation?: boolean;
  position?: 'left' | 'right';
}

const Button = ({
  name,
  loading,
  onClick,
  disabled = false,
  icon,
  outline,
  textSize,
  styles,
  textStyles,
  loaderColor,
  disabledAnimation,
  position = 'left',
}: ButtonProps) => {
  const colors = useColors();

  return (
    <Animated.View
      style={{ flex: 1 }}
      layout={disabledAnimation ? undefined : LinearTransition}
    >
      <ScaleAnimation
        styles={[
          {
            backgroundColor: outline ? colors.background : colors.primary,
            borderWidth: 1,
            borderColor: outline ? colors.border_secondary : 'transparent',
            opacity: loading || disabled ? 0.6 : 1,
            paddingHorizontal: 20,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: name ? '100%' : RH(4.6),
            height: RH(4.6),
          },
          styles,
        ]}
        disabled={disabled || loading}
        onPress={onClick}
        scaleTo={0.98}
      >
        {loading && (
          <Animated.View entering={ZoomIn}>
            <ActivityIndicator
              color={loaderColor ? loaderColor : outline ? BLACK : WHITE}
              style={{
                marginRight: RW(1),
              }}
            />
          </Animated.View>
        )}
        {!loading && position == 'left' && icon && icon}
        {name && (
          <Animated.Text
            layout={LinearTransition.duration(100)}
            numberOfLines={1}
            style={[
              {
                color: outline ? colors.text_secondary : WHITE,
                fontFamily: INTER_MEDIUM,
                fontSize: textSize ? textSize : RH(1.6),
                marginHorizontal: icon ? RW(2) : 0,
              },
              textStyles,
            ]}
          >
            {name}
          </Animated.Text>
        )}
        {!loading && position == 'right' && icon && icon}
      </ScaleAnimation>
    </Animated.View>
  );
};

export default Button;
