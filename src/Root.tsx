import 'react-native-gesture-handler';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './I18n/i18n.config';
import { Provider } from 'react-redux';
import { store } from './Redux';
import { default as mapping } from '../mapping.json'; // <-- import mapping
import * as eva from '@eva-design/eva';
import { LogBox } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { I18nManager } from 'react-native';

I18nManager.allowRTL(false);
LogBox.ignoreLogs(['Warning: Encountered two children with the']);
LogBox.ignoreAllLogs();

const Root = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </ApplicationProvider>
      </Provider>
    </>
  );
};

export default Root;
