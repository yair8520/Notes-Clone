import { View } from 'react-native';
import React, { useRef, useState } from 'react';
import { DrawPannelProps } from './DrawPannelProps';
import styles from './DrawPannelStyles';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';
import { DrawToolBar } from './DrawToolBar';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export const DrawPannel = ({}: DrawPannelProps) => {
  const [strokeWidth, setStrokeWidth] = useState<number>();
  const [color, setColor] = useState<string>();
  const canvasRef = useRef<SketchCanvasRef>(null);
  const nav = useNavigation();
  const redo = () => {
    canvasRef.current?.redo();
  };
  const reset = () => {
    canvasRef.current?.reset();
  };
  const undo = () => {
    canvasRef.current?.undo();
  };
  const saveImage = () => {
    //canvasRef.current?.addPoints([[[113.51702008928571, 416.73660714285717], [115.84122721354167, 415.14136904761904], [124.5724865141369, 411.7762741815476], [136.81897553943452, 403.93675595238096], [152.71182105654762, 391.7874348958333], [169.75462704613096, 373.9620070684524], [192.20731170.43913922991072, 472.5707775297619], [177.49718656994048, 475.31626674107144], [191.7563011532738, 481.7688802083333], [209.45433407738096, 488.2860398065476], [229.5801246279762, 493.9124813988095], [248.81454613095238, 497.8120814732143], [261.63164992559524, 499.76250930059524], [267.5333193824405, 499.77232142857144], [267.4135044642857, 497.875], [266.1532040550595, 496.0654761904762], [264.8229166666667, 493.3138020833333], [263.8075009300595, 491.6077938988095], [264.36244419642856, 491.4017857142857], [263.24725632440476, 491.78125]]]);
    console.log(canvasRef.current?.toImage());
  };
  return (
    <>
      <Appbar.Header>
        <Appbar.Action icon="content-save" onPress={() => saveImage()} />
        <Appbar.Content style={styles.title} title={'Draw Panel'} />
        <Appbar.Action icon="arrow-left" onPress={() => nav.goBack()} />
      </Appbar.Header>
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
        color={color}
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
        pickColor={setColor}
      />
    </>
  );
};
