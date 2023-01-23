import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Home } from '../Pages/Home';
import { NoteEditor } from '../Pages/NoteEditor';
import { List, MD3Colors } from 'react-native-paper';
import { useAppSelector } from '../Redux';
import { getCategories } from '../Features/Notes/NotesSelectors';
import { useModal } from 'react-native-modalfy';

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  const { openModal } = useModal();
  const categories = useAppSelector(getCategories);
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Add Category"
              icon={() => <List.Icon icon="plus" />}
              onPress={() => openModal('InfoModal')}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      {categories.map((category) => (
        <Drawer.Screen
          key={category.title}
          initialParams={{ title: category.title }}
          name={category.title}
          component={Home}
          options={{
            drawerIcon() {
              return (
                <List.Icon
                  color={MD3Colors.neutralVariant30}
                  icon={category.icon || 'folder'}
                />
              );
            },
          }}
        />
      ))}
      <Drawer.Screen
        name={'NoteEditor'}
        component={NoteEditor}
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer.Navigator>
  );
}
