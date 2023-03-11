import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { tabBarStyle } from '../../Navigation';

export const useHideTabBar = (navigation: any) => {
  useFocusEffect(
    React.useCallback(() => {
      navigation
        .getParent()
        ?.getParent()
        ?.setOptions({
          tabBarStyle: { display: 'none' },
        });
    }, [])
  );

  useEffect(() => {
    const blurListener = navigation.addListener('blur', () => {
      navigation
        .getParent()
        ?.getParent()
        ?.setOptions({
          tabBarStyle: { ...tabBarStyle },
        });
    });

    return () => {
      blurListener.remove();
    };
  }, [navigation]);
};
