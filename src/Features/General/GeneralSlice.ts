import { createSlice } from '@reduxjs/toolkit';
import { GeneralState } from './GeneralTypes';
import { Appearance } from 'react-native';

const initialState: GeneralState = {
  darkMode: Appearance.getColorScheme() === 'dark',
  userInfo: {},
};

const GeneralSlice = createSlice({
  name: 'General',
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },

    setUserInfo: (
      state,
      { payload }: { payload: { email: string | null; loggedIn: boolean } }
    ) => {
      state.userInfo = { ...state.userInfo, ...payload };
    },
  },
});

export const { setDarkMode, setUserInfo } = GeneralSlice.actions;
export default GeneralSlice.reducer;
