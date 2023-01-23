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
import { DrawPannel } from '../Components/DrawPannel';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function NoteOptionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NoteEditor" component={NoteEditor} />
      <Stack.Screen name="DrawPannel" component={DrawPannel} />
    </Stack.Navigator>
  );
}

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
        name={'NoteEditorStack'}
        component={NoteOptionStack}
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer.Navigator>
  );
}
