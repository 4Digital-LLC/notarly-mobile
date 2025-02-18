import React, { PropsWithChildren } from 'react';
import { StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface ScaleAnimationProps {
  onPress: () => void;
  scaleTo: number;
  disabled?: boolean;
  styles?: StyleProp<ViewStyle>;
}

const TimeConfiguration = {
  duration: 150,
  easing: Easing.linear,
};

const ScaleAnimation = ({
  children,
  onPress,
  scaleTo,
  disabled = false,
  styles,
}: PropsWithChildren<ScaleAnimationProps>) => {
  const pressed = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return pressed.value
      ? withTiming(1, TimeConfiguration)
      : withTiming(0, TimeConfiguration);
  });
  const animateStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1],
      [1, scaleTo],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{ scale }],
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={() => (pressed.value = true)}
      onPressOut={() => {
        pressed.value = false;
      }}
      disabled={disabled}
    >
      <Animated.View style={[animateStyle, styles]}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ScaleAnimation;
