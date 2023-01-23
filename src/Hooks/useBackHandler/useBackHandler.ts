import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

const useBackButton = (callBack?: () => void) => {
  const nav = useNavigation();

  React.useEffect(() => {
    const backAction = () => {
      if (nav.isFocused()) {
        callBack?.();
        return true;
      }
      return false;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove();
  }, [nav, callBack]);
};

export default useBackButton;
