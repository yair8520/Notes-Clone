import { combineReducers, configureStore } from '@reduxjs/toolkit';
import NotesSlice from '../Features/Notes/NotesSlice';
import LinkSlice from '../Features/Links/LinkSlice';
import GeneralSlice from '../Features/General/GeneralSlice';
import {
  linkPersistConfig,
  notePersistConfig,
  toDoPersistConfig,
} from './Filters';
import { persistReducer } from 'redux-persist';
import firestoreMiddleware from './Middleware';
import ToDoSlice from '../Features/ToDo/ToDoSlice';

const rootReducer = combineReducers({
  note: persistReducer(notePersistConfig, NotesSlice),
  link: persistReducer(linkPersistConfig, LinkSlice),
  todo: persistReducer(toDoPersistConfig, ToDoSlice),
  general: GeneralSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(firestoreMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
