import { combineReducers, configureStore } from '@reduxjs/toolkit';
import NotesSlice from '../Features/Notes/NotesSlice';

import { listenerMiddleware } from './Listener';

const rootReducer = combineReducers({
  note: NotesSlice,
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
