/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { NSnackBar } from './Components/NSnackBar';
import { getTheme } from './Features/General/GeneralSelectors';
import { addMessage } from './Features/Links/LinkSlice';
import { getMessage } from './Features/Links/LinksSelectors';
import AppRouter from './Navigation/AppRouter';
import { useAppDispatch, useAppSelector } from './Redux';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { ModalStack } from './Models/ModalConfig';
import { ModalProvider } from 'react-native-modalfy';
import { Provider as PaperProvider } from 'react-native-paper';
import { darkTheme, lightTheme } from './Theme/Colors';
import { useAuthStateChanged } from './Hooks/useAuthStateChanged';
import { useOnFireBaseMessage } from './Hooks/useOnFireBaseMessage';

const App = () => {
  useAuthStateChanged();
  useOnFireBaseMessage();
  const dispatch = useAppDispatch();
  const isDark = useAppSelector(getTheme);
  const msg = useAppSelector(getMessage);
  useEffect(() => {
    setTimeout(() => {
      dispatch(addMessage({ msg: '' }));
    }, 2000);
  }, [msg]);
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <PaperProvider theme={isDark ? darkTheme : lightTheme}>
        <ApplicationProvider {...eva} theme={isDark ? eva.dark : eva.light}>
          <ModalProvider stack={ModalStack}>
            <AppRouter />
            <NSnackBar visible={!!msg} message={msg} />
          </ModalProvider>
        </ApplicationProvider>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
