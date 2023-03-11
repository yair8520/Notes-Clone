export interface LinkState {
  links: Links;
  snackBarMessage: string;
  password: string;
}
interface Links {
  [key: string]: ILink;
}
interface ILink {
  id: string;
  title: string;
  value: string;
  date?: string;
  locked?: boolean;
}
interface IEditLink {
  id: string;
  title: string;
  value: string;
  date?: string;
}
