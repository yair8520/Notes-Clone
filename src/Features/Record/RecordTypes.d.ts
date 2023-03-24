export interface RecordState {
  recordArray: IRecord[];
}

export interface IRecord {
  id: string;
  headline: string;
  url: string;
  date: string;
  time: string;
  duration: string;
}
export interface IAddRecord {
  url: string;
  duration: string;
}
