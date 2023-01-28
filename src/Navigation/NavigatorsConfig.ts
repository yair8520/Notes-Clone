import { ViewStyle } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

export const headerStyleConfig: ViewStyle = {};

export const defaultScreenOptions = {
  animationEnabled: true,
  gestureEnabled: false,
  cardStyleInterpolator: ({ current, layouts }: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};
export const navigationOptionsConfig: StackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTintColor: 'black',
  detachPreviousScreen: true,
  headerTitleAlign: 'center',
  headerStyle: headerStyleConfig,
  headerShown: false,
  ...defaultScreenOptions,
};
