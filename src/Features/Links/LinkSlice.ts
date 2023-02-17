import { createSlice } from '@reduxjs/toolkit';
import { getCurrentDate } from '../../Utils/Time';
import { IEditLink, ILink, LinkState } from './LinksTypes';

const initialState: LinkState = {
  links: [{ title: 'google', value: 'www.google.co.il', date: '03 Feb 23' }],
  snackBarMessage: '',
  password: '',
};

const LinkSlice = createSlice({
  name: 'Link',
  initialState,
  reducers: {
    addLink: (state, { payload }: { payload: ILink }) => {
      state.links.push({ ...payload, date: getCurrentDate() });
    },
    editLink: (state, { payload }: { payload: IEditLink }) => {
      const { index, title, value } = payload;
      state.links[index] = { ...state.links[index], title, value };
    },
    removeLink: (state, { payload }: { payload: { index: number } }) => {
      state.links.splice(payload.index, 1);
    },
    addMessage: (state, { payload }: { payload: { msg: string } }) => {
      state.snackBarMessage = payload.msg;
    },
    setPass: (state, { payload }: { payload: { pass: string } }) => {
      state.password = payload.pass;
    },
    lockLink: (state, { payload }: { payload: { index: number } }) => {
      if (state.links[payload.index].locked) {
        state.links[payload.index].locked = false;
      } else {
        state.links[payload.index].locked = true;
      }
    },
  },
});

export const { addLink, removeLink, editLink, addMessage, setPass, lockLink } =
  LinkSlice.actions;
export default LinkSlice.reducer;
