import { PersistConfig } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authPersistConfig: PersistConfig<any> = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['userName', 'lastTimeOpen'],
};
export const taskPersistConfig: PersistConfig<any> = {
  key: 'task',
  storage: AsyncStorage,
  whitelist: [''],
};
