import { Image, View } from 'react-native';
import React from 'react';
import styles from './DrawerContentStyles';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Divider, List } from 'react-native-paper';
import { NText } from '../Text';
import { useModal } from 'react-native-modalfy';
import { IconLink } from '../IconLink';
import { socialLinks } from '../../constant';
import { AppLogo } from '../../Assets/Images';
export const NDrawerContent = (props: any) => {
  const { openModal } = useModal();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.empty}>
        <Image source={AppLogo} style={styles.logo} />
      </View>
      <Divider />
      <DrawerItem
        label="Add Category"
        icon={() => <List.Icon icon="plus" />}
        onPress={() => openModal('InfoModal')}
      />
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
