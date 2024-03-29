import { TextProps } from 'react-native';

export interface AcTextProps extends Omit<TextProps, 'style'> {
  [key: string]: any;
  variant?: 'H1' | 'H2' | 'H3' | 'H4' | 'p' | 'head' | 'error';
  style?: React.CSSProperties | {};
  bold?: boolean;
}
