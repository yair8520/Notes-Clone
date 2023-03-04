import {
  createListenerMiddleware,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { AppStartListening } from './Types';

export const listenerMiddleware = createListenerMiddleware();
const listener = listenerMiddleware.startListening as AppStartListening;
listener({
  matcher: isPending,
  effect: async (_action, _listenerApi) => {},
});
listener({
  matcher: isFulfilled,
  effect: async (_action, _listenerApi) => {},
});

listener({
  matcher: isRejected,
  effect: async (_action: any, _listenerApi) => {},
});
