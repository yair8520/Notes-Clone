import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../Pages/Home';
import { NoteEditor } from '../Pages/NoteEditor';
import { List, MD3Colors } from 'react-native-paper';
import { useAppSelector } from '../Redux';
import { getCategories } from '../Features/Notes/NotesSelectors';
import { DrawPannel } from '../Components/DrawPannel';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationOptionsConfig } from './NavigatorsConfig';

import { NDrawerContent } from '../Components/DrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function NoteOptionStack() {
  return (
    <Stack.Navigator screenOptions={{ ...navigationOptionsConfig }}>
      <Stack.Screen name="NoteEditor" component={NoteEditor} />
      <Stack.Screen name="DrawPannel" component={DrawPannel} />
    </Stack.Navigator>
  );
}

export default function AppRouter() {
  const categories = useAppSelector(getCategories);
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, unmountOnBlur: true }}
      drawerContent={(props) => {
        return <NDrawerContent {...props} />;
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
        name={'NoteEditorStack'}
        component={NoteOptionStack}
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer.Navigator>
  );
}
