import React from 'react';
const Drawer = createDrawerNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../Pages/Home';
import { List } from 'react-native-paper';
import { NCalender } from '../Components/NCalender';
import { NDrawerContent } from '../Components/DrawerContent';
import { PassModal } from '../Models/PassModal';
import { NoteOptionStack } from '.';
import { getCategories } from '../Features/Notes/NotesSelectors';
import { useAppSelector } from '../Redux';

export function DrawerNav() {
  const categories = useAppSelector(getCategories);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStatusBarAnimation: 'fade',
      }}
      initialRouteName={'Work'}
      drawerContent={(props) => {
        return <NDrawerContent {...props} />;
      }}
    >
      <Drawer.Screen
        name={'Calendar'}
        component={NCalender}
        options={{
          drawerIcon() {
            return <List.Icon icon={'calendar'} />;
          },
        }}
      />
      {categories.map((category: any) => (
        <Drawer.Screen
          key={category.title}
          initialParams={{ title: category.title }}
          name={category.title}
          component={Home}
          options={{
            drawerIcon() {
              return <List.Icon icon={category.icon || 'folder'} />;
            },
          }}
        />
      ))}

      <Drawer.Screen
        name={'password'}
        component={PassModal}
        options={{
          unmountOnBlur: true,
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name={'NoteEditorStack'}
        component={NoteOptionStack}
        options={{
          // unmountOnBlur: true,
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer.Navigator>
  );
}
