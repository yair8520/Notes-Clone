export interface LinkState {
  links: ILink[];
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
