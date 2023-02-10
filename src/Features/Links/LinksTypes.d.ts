export interface LinkState {
  links: ILink[];
  snackBarMessage: string;
}

interface ILink {
  title: string;
  value: string;
  date?: string;
}
interface IEditLink {
  index: number;
  title: string;
  value: string;
  date?: string;
}
