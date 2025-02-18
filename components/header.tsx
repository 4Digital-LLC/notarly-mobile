import { useColorScheme } from '@/hooks/useColorScheme';
import { RH, RW } from '@/utils/reponsiveSizes';
import React, { FC, ReactNode } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { BackIcon } from '@/utils/icons';

interface HeaderProps {
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  rightDisabled?: boolean;
  leftDisabled?: boolean;
  label?: string;
  backgroundColor?: string;
  disabledBorder?: boolean;
  disabledBackground?: boolean;
  centerComponent?: ReactNode;
  modal?: boolean;
}

const Header: FC<HeaderProps> = ({
  label,
  leftComponent,
  rightComponent,
  onLeftClick,
  onRightClick,
  rightDisabled = false,
  leftDisabled = false,
  backgroundColor,
  disabledBorder = false,
  disabledBackground = false,
  centerComponent,
  modal = false,
}) => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        paddingTop: modal && Platform.OS == 'ios' ? 0 : insets.top,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: disabledBackground
          ? 'transparent'
          : backgroundColor
          ? backgroundColor
          : '#ffff90',
        borderBottomWidth: disabledBorder ? 0 : 1,
        borderBottomColor: '#ff00ff',
        height: modal && Platform.OS == 'ios' ? RH(6) : insets.top + RH(5.5),
      }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (onLeftClick) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onLeftClick();
          } else if (router.canGoBack()) {
            router.back();
          }
        }}
        disabled={leftDisabled}
        style={{
          height: '100%',
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: RW(5),
        }}
      >
        {leftComponent ? (
          leftComponent
        ) : (
          <BackIcon
            color={colorScheme === 'light' ? 'red' : 'blue'}
            height={RH(1.7)}
            width={RH(1.7)}
          />
        )}
      </TouchableOpacity>
      <View style={{ flex: 4, alignItems: 'center' }}>
        {centerComponent ? (
          centerComponent
        ) : (
          <Text
            numberOfLines={1}
            style={{
              // fontFamily: INTER_MEDIUM,
              fontSize: RH(1.7),
              color: '#000',
              textAlign: 'center',
            }}
          >
            {label}
          </Text>
        )}
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          height: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingHorizontal: RW(5),
        }}
        disabled={rightDisabled}
        onPress={() => {
          if (onRightClick) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onRightClick();
          }
        }}
      >
        {rightComponent}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
