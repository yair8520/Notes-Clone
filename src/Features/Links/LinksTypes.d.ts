export interface LinkState {
  links: ILink[];
  snackBarMessage: string;
  password: string;
}

interface ILink {
  title: string;
  value: string;
  date?: string;
  locked?: boolean;
}
interface IEditLink {
  index: number;
  title: string;
  value: string;
  date?: string;
}
