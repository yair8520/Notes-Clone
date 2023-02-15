import { Image, View } from 'react-native';
import React from 'react';
import styles from './DrawerContentStyles';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Divider, List, Switch } from 'react-native-paper';
import { useModal } from 'react-native-modalfy';
import { AppLogo } from '../../Assets/Images';
import { Drawer } from 'react-native-paper';
import { useAppDispatch } from '../../Redux';
import { setDarkMode } from '../../Features/General/GeneralSlice';

export const NDrawerContent = (props: any) => {
  const { openModal } = useModal();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const dispatch = useAppDispatch();
  const onToggleSwitch = () => {
    dispatch(setDarkMode());
    setIsSwitchOn(!isSwitchOn);
  };
  return (
    <DrawerContentScrollView
      style={{ backgroundColor: !isSwitchOn ? '#222e36' : '#c5d7e0' }}
      {...props}
    >
      <View style={styles.empty}>
        <Image source={AppLogo} style={styles.logo} />
      </View>
      <Divider />
      <Drawer.Section>
        <Drawer.Item
          label={isSwitchOn ? 'Dark Mode' : 'Light Mode'}
          icon={() => <List.Icon icon="theme-light-dark" />}
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
