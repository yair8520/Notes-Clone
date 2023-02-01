import 'react-native-gesture-handler';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './I18n/i18n.config';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './Redux';
import { ModalProvider } from 'react-native-modalfy';
import { ModalStack } from './Models/ModalConfig';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: Encountered two children with the']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Root = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <I18nextProvider i18n={i18n}>
          <ModalProvider stack={ModalStack}>
            <PaperProvider>
              <NavigationContainer>
                <App />
              </NavigationContainer>
            </PaperProvider>
          </ModalProvider>
        </I18nextProvider>
      </ApplicationProvider>
    </Provider>
  );
};

export default Root;
