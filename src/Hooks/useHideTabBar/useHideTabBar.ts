import { useEffect } from 'react';
import { tabBarStyle } from '../../Navigation';

export const useHideTabBar = (navigation: any) => {
  useEffect(() => {
    navigation
      .getParent()
      ?.getParent()
      ?.setOptions({
        tabBarStyle: { display: 'none' },
      });
    return () =>
      navigation
        .getParent()
        ?.getParent()
        ?.setOptions({
          tabBarStyle: { ...tabBarStyle },
        });
  }, [navigation]);
};
