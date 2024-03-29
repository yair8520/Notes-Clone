/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React, { useRef, useEffect } from 'react';
import styles from './DrawerContentStyles';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { List, Switch } from 'react-native-paper';

import { Drawer } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../Redux';
import { setDarkMode } from '../../Features/General/GeneralSlice';
import { RotateView } from '../Animations/RotateView';
import { signOut } from '../../Helpers/FireBase';
import { NText } from '../Text';
import { getTheme, getUserInfo } from '../../Features/General/GeneralSelectors';
import Lottie from 'lottie-react-native';
import { useDrawerStatus } from '@react-navigation/drawer';
import { DrawerDivider } from './DrawerDivider';

export const NDrawerContent = (props: any) => {
  const { email } = useAppSelector(getUserInfo);
  const isDark = useAppSelector(getTheme);
  const [isSwitchOn, setIsSwitchOn] = React.useState(isDark);
  const dispatch = useAppDispatch();
  const onToggleSwitch = () => {
    dispatch(setDarkMode());
    setIsSwitchOn(!isSwitchOn);
  };
  const isOpen = useDrawerStatus();
  const animationRef = useRef<Lottie>(null);
  useEffect(() => {
    if (animationRef.current) {
      if (isOpen === 'open') {
        animationRef.current.play();
      } else {
        animationRef.current.pause();
      }
    }
  }, [isOpen]);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.empty}>
        <Lottie
          ref={animationRef}
          source={require('../../Assets/Images/WorkFlowAnim.json')}
          autoSize
          autoPlay
          loop={false}
          style={{ height: 150, width: 150 }}
        />
      </View>
      <View style={styles.title}>
        <NText bold variant="H4">
          Logged in as : {email}
        </NText>
      </View>
      <DrawerDivider text={'Settings'} />
      <Drawer.Item
        label="Home"
        icon={() => <List.Icon icon={'home'} />}
        onPress={() => props.navigation.navigate('Welcome')}
      />
      <Drawer.Item
        theme={{
          colors: {
            onSurfaceVariant: 'red',
          },
        }}
        label="Disconnect"
        icon={() => <List.Icon icon="door-closed" />}
        onPress={() => signOut()}
      />
      <Drawer.Item
        label={isSwitchOn ? 'Dark Mode' : 'Light Mode'}
        icon={() => {
          return (
            <RotateView deps={isSwitchOn}>
              <List.Icon icon="theme-light-dark" />
            </RotateView>
          );
        }}
        onPress={onToggleSwitch}
        right={() => (
          <Switch
            color="#3f7ee8"
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
          />
        )}
      />

      <DrawerDivider text={'To Do'} />
      <Drawer.Item
        label="ToDo"
        icon={() => <List.Icon icon={'format-list-checkbox'} />}
        onPress={() => props.navigation.navigate('Todo')}
      />

      <DrawerDivider text={'Links'} />
      <Drawer.Item
        label="Links"
        icon={() => <List.Icon icon="link" />}
        onPress={() => props.navigation.navigate('Links')}
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
