import { TypedStartListening } from '@reduxjs/toolkit';
import { store } from './Store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
