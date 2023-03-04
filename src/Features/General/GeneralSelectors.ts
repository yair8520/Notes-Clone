import { RootState } from '../../Redux';

export const getTheme = (state: RootState) => state.general.darkMode;
export const getUserInfo = (state: RootState) => state.general.userInfo;
