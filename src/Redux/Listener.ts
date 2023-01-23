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

/**
 * for popup the redux thunk need to send {popUp:...}
 * normal error message, the redux thunk need to send {err:...}
 */
listener({
  matcher: isRejected,
  effect: async (_action: any, _listenerApi) => {},
});
