import React from 'react';
const Drawer = createDrawerNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../Pages/Home';
import { NDrawerContent } from '../Components/DrawerContent';
import { getCategories } from '../Features/Notes/NotesSelectors';
import { useAppSelector } from '../Redux';
import { Links } from '../Pages/Links';
import { ToDo } from '../Pages/ToDo';
import { Welcome } from '../Pages/Welcome';

export function DrawerNav() {
  const categories = useAppSelector(getCategories);
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        drawerStatusBarAnimation: 'fade',
      }}
      initialRouteName={'Welcome'}
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
        name={'Todo'}
        component={ToDo}
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name={'Welcome'}
        component={Welcome}
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />

      {categories.map((category: any) => (
        <Drawer.Screen
          key={category.title}
          initialParams={{ title: category.title }}
          name={category.title}
          component={Home}
          options={{
            drawerItemStyle: { display: 'none' },
          }}
        />
      ))}
    </Drawer.Navigator>
  );
}
