import React from 'react';
import { useAppSelector } from '../Redux';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationOptionsConfig } from './NavigatorsConfig';
import { getUserInfo } from '../Features/General/GeneralSelectors';
import { Login } from '../Pages/Login';
import { NoteEditor } from '../Pages/NoteEditor';
import { Loading } from '../Pages/Loading';
import { DrawerNav } from './NoteOptionStack';
import { PassModal } from '../Models/PassModal';

const Stack = createStackNavigator();

export function NoteOptionStack() {
  return (
    <Stack.Navigator screenOptions={{ ...navigationOptionsConfig }}>
      <Stack.Screen name="NoteEditor" component={NoteEditor} />
    </Stack.Navigator>
  );
}
export default function AppRouter() {
  const { loggedIn } = useAppSelector(getUserInfo);

  return (
    <Stack.Navigator screenOptions={{ ...navigationOptionsConfig }}>
      {!loggedIn ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Home" component={DrawerNav} />
          <Stack.Screen
            options={{ presentation: 'modal' }}
            name="password"
            component={PassModal}
          />
          <Stack.Screen name="NoteEditor" component={NoteEditor} />
        </>
      )}
    </Stack.Navigator>
  );
}
