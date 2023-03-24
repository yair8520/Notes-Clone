import { RootState } from '../../Redux';

export const getRecords = (state: RootState) => state.record.recordArray;
