import { MD3DarkTheme, DefaultTheme } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

export const generateColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
  return `#${randomColor}`;
};
export const darkTheme: ThemeProp = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#3498db',
    surface: '#36454F',
  },
};
export const lightTheme: ThemeProp = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primaryContainer: 'white',
    backdrop: 'white',
    surface: 'white',
    background: 'white',
    primary: '#3498db',
  },
};
