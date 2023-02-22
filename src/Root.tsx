import 'react-native-gesture-handler';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './I18n/i18n.config';
import { Provider } from 'react-redux';
import { store } from './Redux';
import { LogBox } from 'react-native';
import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { I18nManager } from 'react-native';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

I18nManager.allowRTL(false);
LogBox.ignoreAllLogs();

const Root = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default Root;
