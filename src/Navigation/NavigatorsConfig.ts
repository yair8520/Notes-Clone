import { ViewStyle } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

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
export const tabBarOptions: BottomTabNavigationOptions = {
  activeTintColor: '#e91e63',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: 'blue',
  },
};

export const tabBarStyle = {
  width: '90%',
  alignSelf: 'center',
  borderRadius: 80,
  marginBottom: 10,
};
