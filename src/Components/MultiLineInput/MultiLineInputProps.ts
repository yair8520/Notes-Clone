export interface MultiLineInputProps {
  [key: string]: any;
  onChange: (text: string) => void;
  value: string;
  style?: React.CSSProperties | {};
}
