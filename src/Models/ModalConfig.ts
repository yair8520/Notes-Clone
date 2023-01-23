import { Animated, Dimensions } from 'react-native';
import {
  createModalStack,
  ModalOptions,
  ModalStackConfig,
} from 'react-native-modalfy';
import { InfoModal } from './InfoModal';
const { height } = Dimensions.get('screen');

const modalConfig: ModalStackConfig = { InfoModal };

const animate = (animatedValue: Animated.Value, toValue: number) => {
  Animated.spring(animatedValue, {
    toValue,
    damping: 10,
    mass: 0.35,
    stiffness: 100,
    overshootClamping: true,
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
    useNativeDriver: true,
  }).start();
};
const defaultOptions: ModalOptions = {
  backdropOpacity: 0.7,
  animationIn: animate,
  transitionOptions: (animatedValue) => ({
    opacity: animatedValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0.9],
    }),
    transform: [
      { perspective: 2000 },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [height, 0],
        }),
      },
    ],
  }),
};
export const ModalStack = createModalStack(modalConfig, defaultOptions);
