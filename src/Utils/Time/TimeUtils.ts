import moment from 'moment';

export const getCurrentTime = (): string => {
  return moment().format('HH:mm');
};
export const getCurrentDate = (): string => {
  return moment().format('DD MMM YY');
};
export const getFullDate = (): string => {
  return moment().format('DD-MM-YYYY');
};
export const getTimeStamp = (): string => {
  return moment().format('DD-MM-YYYY:MM:HH:SS');
};
