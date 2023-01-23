import { Dimensions } from 'react-native';
import { sizes } from '../../constant';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

/**
 *
 *  get element Width according to screen size
 * @param {number} size
 * @return {*}  {number}
 */
export const elementWidth = (size: number): number => {
  return (windowWidth / sizes.defaultWindowWidth) * size;
};
/**
 *
 *   get element Height according to screen size
 * @param {number} size
 * @return {*}  {number}
 */
export const elementHeight = (size: number): number => {
  return (windowHeight / sizes.defaultWindowHeight) * size;
};
