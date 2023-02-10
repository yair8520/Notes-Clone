export interface NInputProps {
  [key: string]: any;
  onChange: (text: string) => void;
  value: string;
  error?: boolean;
  errorText?: string;
  style?: React.CSSProperties | {};
}
