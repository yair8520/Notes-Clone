import React from 'react';
const Drawer = createDrawerNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../Pages/Home';
import { List } from 'react-native-paper';
import { NCalender } from '../Components/NCalender';
import { NDrawerContent } from '../Components/DrawerContent';
import { getCategories } from '../Features/Notes/NotesSelectors';
import { useAppSelector } from '../Redux';
import { Links } from '../Pages/Links';

export function DrawerNav() {
  const categories = useAppSelector(getCategories);
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        drawerStatusBarAnimation: 'fade',
      }}
      initialRouteName={'Links'}
      drawerContent={(props) => {
        return <NDrawerContent {...props} />;
      }}
    >
      <Drawer.Screen
        name={'Links'}
        component={Links}
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
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
    </Drawer.Navigator>
  );
}
