/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../Pages/Home';
import { NoteEditor } from '../Pages/NoteEditor';
import { List, MD3Colors } from 'react-native-paper';
import { useAppSelector } from '../Redux';
import { getCategories } from '../Features/Notes/NotesSelectors';
import { DrawPannel } from '../Components/DrawPannel';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationOptionsConfig, tabBarStyle } from './NavigatorsConfig';
import { NDrawerContent } from '../Components/DrawerContent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Links } from '../Pages/Links';
import NotesIcon from '../Assets/Images/NotesIcon';
import LinksIcons from '../Assets/Images/LinksIcons';
import { View } from 'react-native';
import { PassModal } from '../Models/PassModal';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function TabScreens() {
  const categories = useAppSelector(getCategories);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Tab.Navigator
        initialRouteName="Notes"
        screenOptions={{
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarStyle: { ...tabBarStyle },
        }}
      >
        <Tab.Screen
          name="Notes"
          component={DrawerNav}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              console.log('ASdasd');
              e.preventDefault();
              navigation.navigate('Notes', {
                screen: categories[0].title,
              });
            },
          })}
          options={() => ({
            tabBarIcon: ({ focused }) => (
              <NotesIcon fill={focused ? '#1d9df3' : 'black'} />
            ),
          })}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <LinksIcons fill={focused ? '#1d9df3' : 'black'} />
            ),
          }}
          name="Links"
          component={Links}
        />
      </Tab.Navigator>
    </View>
  );
}
function NoteOptionStack() {
  return (
    <Stack.Navigator screenOptions={{ ...navigationOptionsConfig }}>
      <Stack.Screen name="NoteEditor" component={NoteEditor} />
      {/* <Stack.Screen name="DrawPannel" component={DrawPannel} /> */}
    </Stack.Navigator>
  );
}
function DrawerNav() {
  const categories = useAppSelector(getCategories);
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, unmountOnBlur: true }}
      initialRouteName={'Home'}
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
        name={'password'}
        component={PassModal}
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
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

export default function AppRouter() {
  return <TabScreens />;
}
