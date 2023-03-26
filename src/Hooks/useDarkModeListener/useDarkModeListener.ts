import { useEffect } from 'react';
import { Appearance } from 'react-native';

const useDarkModeListener = (callBack?: (isDark: boolean) => void) => {
  useEffect(() => {
    const subscription = Appearance.addChangeListener(
      ({ colorScheme: newColorScheme }) => {
        callBack?.(newColorScheme === 'dark');
      }
    );

    return () => subscription.remove();
  }, [callBack]);
};

export default useDarkModeListener;
