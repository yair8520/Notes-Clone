import { RootState } from '../../Redux';

export const getTheme = (state: RootState) => state.general.darkMode;
