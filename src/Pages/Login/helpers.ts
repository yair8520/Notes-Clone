import { errorMsg } from '../../I18n/HebrewTranslations';
import { ILoginState } from './LoginProps';

export const validateFields = (info: ILoginState, handler: any) => {
  if (info.email === '') {
    handler('errorEmail', errorMsg.required);
    return false;
  }
  if (info.pass === '') {
    handler('errorPass', errorMsg.required);
    return false;
  }
  return true;
};
