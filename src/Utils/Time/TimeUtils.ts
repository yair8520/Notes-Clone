import moment from 'moment';

export const getCurrentTime = (): string => {
  return moment().format('HH:mm');
};
export const getCurrentDate = (): string => {
  return moment().format('DD MMM');
};
