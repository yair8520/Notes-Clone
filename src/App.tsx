import React from 'react';
import { I18nManager } from 'react-native';
import AppRouter from './Navigation/AppRouter';

I18nManager.forceRTL(true);

const App = () => {
  return <AppRouter />;
};

export default App;
