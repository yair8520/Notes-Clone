import { combineReducers, configureStore } from '@reduxjs/toolkit';
import NotesSlice from '../Features/Notes/NotesSlice';
import LinkSlice from '../Features/Links/LinkSlice';
import GeneralSlice from '../Features/General/GeneralSlice';

import { listenerMiddleware } from './Listener';

const rootReducer = combineReducers({
  note: NotesSlice,
  link: LinkSlice,
  general: GeneralSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
