export interface DrawToolBarProps {
  [key: string]: any;
  visible?: boolean;
  redo: () => void;
  undo: () => void;
  reset: () => void;
  setStrokeWidth: (width: number) => void;
  pickColor: any;
}
