import { createSlice } from '@reduxjs/toolkit';

import { GeneralState } from './GeneralTypes';

const initialState: GeneralState = {
  darkMode: false,
};

const GeneralSlice = createSlice({
  name: 'General',
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setDarkMode } = GeneralSlice.actions;
export default GeneralSlice.reducer;
