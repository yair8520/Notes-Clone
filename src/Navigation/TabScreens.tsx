import React from 'react';
import { tabBarStyle } from './NavigatorsConfig';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getCategories } from '../Features/Notes/NotesSelectors';
import { Links } from '../Pages/Links';
import NotesIcon from '../Assets/Images/NotesIcon';
import LinksIcons from '../Assets/Images/LinksIcons';
import { Layout } from '../Components/Layout';
import { getTheme } from '../Features/General/GeneralSelectors';
import { useAppSelector } from '../Redux';
import { DrawerNav } from './NoteOptionStack';
const Tab = createBottomTabNavigator();

export function TabScreens() {
  const categories = useAppSelector(getCategories);
  const isDark = useAppSelector(getTheme);
  return (
    <Layout>
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
              e.preventDefault();
              navigation.navigate('Notes', {
                screen: categories[0].title,
              });
            },
          })}
          options={() => ({
            tabBarIcon: ({ focused }) => (
              <NotesIcon
                fill={focused ? '#1d9df3' : !isDark ? 'black' : 'white'}
              />
            ),
          })}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <LinksIcons
                fill={focused ? '#1d9df3' : !isDark ? 'black' : 'white'}
              />
            ),
          }}
          name="Links"
          component={Links}
        />
      </Tab.Navigator>
    </Layout>
  );
}
