export interface DrawToolBarProps {
  [key: string]: any;
  visible?: boolean;
  redo: () => void;
  undo: () => void;
  reset: () => void;
  setBrush: (width: number) => void;
  pickColor: (color: string) => void;
}
