import { PersistConfig } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const notePersistConfig: PersistConfig<any> = {
  key: 'note',
  storage: AsyncStorage,
  whitelist: ['categories', 'notesArray'],
};
export const linkPersistConfig: PersistConfig<any> = {
  key: 'link',
  storage: AsyncStorage,
  whitelist: ['password', 'links'],
};
