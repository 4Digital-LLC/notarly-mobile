import React from 'react';
import { ReactNode, createContext, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import { RH, RW } from '@/utils/reponsiveSizes';
import { ERROR_600, TEAL_700, WHITE } from '@/theme/colors';
import { INTER_MEDIUM } from '@/theme/typography';
import CheckCircle from '@/assets/icons/check-circle-filled.svg';
import AlertCircle from '@/assets/icons/warning_hexa.svg';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';

type ToastType = 'success' | 'error';

type Toast = {
  message: string;
  visible: boolean;
  type: ToastType;
};

interface ToastContextType {
  showToast: (message: string, type: ToastType) => void;
  toast: Toast;
}

export const ToastContext = createContext<ToastContextType>({
  toast: {
    message: '',
    visible: true,
    type: 'success',
  },
  showToast: () => {},
});

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<Toast>({
    visible: false,
    message: '',
    type: 'success',
  });
  const showToast = (message: string, type: ToastType) => {
    setToast({
      message,
      visible: true,
      type,
    });
    setTimeout(() => {
      setToast({
        message: '',
        visible: false,
        type: 'success',
      });
    }, 3000);
  };
  return (
    <ToastContext.Provider
      value={{
        toast,
        showToast,
      }}
    >
      {children}
      {toast.visible && (
        <Animated.View
          entering={FadeInDown}
          exiting={FadeOutDown}
          style={{
            zIndex: 100,
            position: 'absolute',
            bottom: Platform.OS == 'ios' ? RH(4) : RH(2),
            width: RW(94),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: RW(3),
            paddingVertical: RH(1.3),
            paddingHorizontal: RW(4),
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2,
            elevation: 1,
            backgroundColor: toast.type == 'success' ? TEAL_700 : ERROR_600,
          }}
        >
          <Text
            style={{
              fontFamily: INTER_MEDIUM,
              color: WHITE,
            }}
          >
            {toast.message}
          </Text>
          {toast.type == 'success' ? (
            <CheckCircle color={TEAL_700} />
          ) : (
            <AlertCircle color={WHITE} />
          )}
        </Animated.View>
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
