export interface NDropDownProps {
  [key: string]: any;
  style?: React.CSSProperties | {};
  setSelectedIndex: (index: any) => void;
  selectedIndex: any;
  label?: string;
  data: any;
}
