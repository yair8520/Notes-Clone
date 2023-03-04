import { View } from 'react-native';
import React, { useRef, useEffect } from 'react';
import styles from './DrawerContentStyles';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Divider, List, Switch } from 'react-native-paper';
import { useModal } from 'react-native-modalfy';
import { Drawer } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../Redux';
import { setDarkMode } from '../../Features/General/GeneralSlice';
import { RotateView } from '../RotateView';
import { signOut } from '../../Helpers/FireBase';
import { NText } from '../Text';
import { getUserInfo } from '../../Features/General/GeneralSelectors';
import Lottie from 'lottie-react-native';
import { useDrawerStatus } from '@react-navigation/drawer';

export const NDrawerContent = (props: any) => {
  const { openModal } = useModal();
  const { email } = useAppSelector(getUserInfo);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
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
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ height: 150, width: 150 }}
        />
      </View>
      <View style={styles.title}>
        <NText bold variant="H4">
          Logged in as : {email}
        </NText>
      </View>
      <Divider />
      <Drawer.Section>
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
        <Drawer.Item
          label="Add Category"
          icon={() => <List.Icon icon="plus" />}
          onPress={() => openModal('InfoModal')}
        />
      </Drawer.Section>

      <DrawerItemList {...props} />
      {/* <View style={styles.header}>
        <NText bold variant="H1">
          Notes App
        </NText>
        <NText bold variant="H2">
          Created by Yair Gabay
        </NText>
        <View style={styles.icons}>
          <IconLink
            iconName="linkedin"
            url={socialLinks.linkedin}
            color="#0963bc"
          />
          <IconLink iconName="github" url={socialLinks.git} />
        </View>
      </View> */}
    </DrawerContentScrollView>
  );
};
