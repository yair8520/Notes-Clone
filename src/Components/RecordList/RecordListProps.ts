import { IRecord } from '../../Features/Record/RecordTypes';

export interface RecordListProps {
  [key: string]: any;
  array: IRecord[];
}

export interface IActiveIndex {
  open: boolean;
  index: number;
}
