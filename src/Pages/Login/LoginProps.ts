export interface LoginProps {
  [key: string]: any;
}
export interface ILoginState {
  email: string;
  pass: string;
  errorEmail: string;
  errorPass: string;
}
export const loginState: ILoginState = {
  email: '',
  pass: '',
  errorEmail: '',
  errorPass: '',
};
