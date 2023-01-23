import { Button, ScrollView, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { DrawPannelProps } from './DrawPannelProps';
import styles from './DrawPannelStyles';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';
import { DrawToolBar } from './DrawToolBar';
export const DrawPannel = ({}: DrawPannelProps) => {
  const [strokeWidth, setStrokeWidth] = useState<number>();
  const [color, setColor] = useState<string>();
  const canvasRef = useRef<SketchCanvasRef>(null);
  const redo = () => {
    canvasRef.current?.redo();
  };
  const reset = () => {
    canvasRef.current?.reset();
  };
  const undo = () => {
    canvasRef.current?.undo();
  };
  const setBrush = () => {};
  const pickColor = () => {};
  return (
    <>
      <View style={styles.container}>
        <SketchCanvas
          ref={canvasRef}
          strokeColor={color}
          strokeWidth={strokeWidth}
          containerStyle={styles.container}
        />
      </View>
      <DrawToolBar
        reset={reset}
        redo={redo}
        undo={undo}
        setBrush={setBrush}
        pickColor={pickColor}
      />
    </>
  );
};
