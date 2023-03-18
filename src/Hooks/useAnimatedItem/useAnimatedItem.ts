import { useState, useEffect } from 'react';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';

const useAnimatedItem = (delay: number) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true);
    }, delay);
  }, [delay]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(hasAnimated ? 0 : 100, {
            damping: 10,
            stiffness: 100,
            mass: 0.5,
          }),
        },
      ],
    };
  });

  return animatedStyle;
};

export default useAnimatedItem;
