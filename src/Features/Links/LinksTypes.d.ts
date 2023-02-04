export interface LinkState {
  links: ILink[];
}

interface ILink {
  title: string;
  value: string;
  date?: string;
}
