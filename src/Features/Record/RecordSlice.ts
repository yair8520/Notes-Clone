import { createSlice } from '@reduxjs/toolkit';
import { findRecord, getNextHeadLine } from '../../Helpers/helper';
import { getCurrentDate, getCurrentTime } from '../../Utils/Time';
import { IAddRecord, IRecord, RecordState } from './RecordTypes';
import { uid } from 'uid';

const initialState: RecordState = {
  recordArray: [],
};
const RecordSlice = createSlice({
  name: 'Record',
  initialState,
  reducers: {
    setRecords: (state, { payload }: { payload: { data: IRecord[] } }) => {
      state.recordArray = payload.data;
    },
    addRecord: (state, { payload }: { payload: { data: IAddRecord } }) => {
      state.recordArray.unshift({
        date: getCurrentDate(),
        headline: getNextHeadLine(state.recordArray),
        id: uid(16),
        time: getCurrentTime(),
        url: payload.data.url,
        duration: payload.data.duration,
      });
    },
    setRecordTitle: (
      state,
      { payload }: { payload: { id: string; headline: string } }
    ) => {
      const index = findRecord(state.recordArray, payload.id);
      state.recordArray[index].headline = payload.headline;
    },
    setRecord: (
      state,
      { payload }: { payload: { url: string; id: string } }
    ) => {
      const index = findRecord(state.recordArray, payload.id);
      state.recordArray[index] = {
        ...state.recordArray[index],
        url: payload.url,
      };
      console.log(state.recordArray);
    },
    removeRecord: (state, { payload }: { payload: { id: string } }) => {
      const index = findRecord(state.recordArray, payload.id);
      state.recordArray.splice(index, 1);
    },
  },
});

export const {
  setRecords,
  setRecord,
  setRecordTitle,
  addRecord,
  removeRecord,
} = RecordSlice.actions;
export default RecordSlice.reducer;
