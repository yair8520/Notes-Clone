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
import { ModalStack } from './Models/ModalConfig';
import { ModalProvider } from 'react-native-modalfy';
import { Provider as PaperProvider } from 'react-native-paper';
import { darkTheme, lightTheme } from './Theme/Colors';

const App = () => {
  const msg = useAppSelector(getMessage);
  const isDark = useAppSelector(getTheme);

  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(addMessage({ msg: '' }));
    }, 1000);
  }, [msg]);
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <PaperProvider theme={isDark ? darkTheme : lightTheme}>
        <ModalProvider stack={ModalStack}>
          <AppRouter />
          <NSnackBar visible={!!msg} message={msg} />
        </ModalProvider>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
