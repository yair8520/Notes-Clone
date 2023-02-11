import { RootState } from '../../Redux';

export const getLinks = (state: RootState) => state.link.links;
export const getMessage = (state: RootState) => state.link.snackBarMessage;
export const getPass = (state: RootState) => state.link.password;
