import { createSlice } from '@reduxjs/toolkit';
import { getCurrentDate } from '../../Utils/Time';
import { IEditLink, ILink, Links, LinkState } from './LinksTypes';

const initialState: LinkState = {
  links: {},
  snackBarMessage: '',
  password: '',
};

const LinkSlice = createSlice({
  name: 'Link',
  initialState,
  reducers: {
    setInitialLinks: (state, { payload }: { payload: { links: Links } }) => {
      state.links = payload.links;
    },
    addLink: (state, { payload }: { payload: ILink }) => {
      console.log(payload);
      state.links[payload.id as keyof object] = {
        date: getCurrentDate(),
        ...payload,
      };
    },
    editLink: (state, { payload }: { payload: IEditLink }) => {
      const { id, title, value } = payload;
      state.links[id] = { ...state.links[id], title, value };
    },
    removeLink: (state, { payload }: { payload: { id: string } }) => {
      delete state.links[payload.id];
    },
    addMessage: (state, { payload }: { payload: { msg: string } }) => {
      state.snackBarMessage = payload.msg;
    },
    setPass: (state, { payload }: { payload: { pass: string } }) => {
      state.password = payload.pass;
    },
    lockLink: (state, { payload }: { payload: { id: string } }) => {
      if (state.links[payload.id].locked) {
        state.links[payload.id].locked = false;
      } else {
        state.links[payload.id].locked = true;
      }
    },
  },
});

export const {
  addLink,
  removeLink,
  editLink,
  addMessage,
  setPass,
  lockLink,
  setInitialLinks,
} = LinkSlice.actions;
export default LinkSlice.reducer;
