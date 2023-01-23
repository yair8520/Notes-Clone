import { Button, ScrollView, View } from 'react-native';
import React, { useRef } from 'react';
import { DrawPannelProps } from './DrawPannelProps';
import styles from './DrawPannelStyles';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';
import { DrawToolBar } from './DrawToolBar';
export const DrawPannel = ({}: DrawPannelProps) => {
  const canvasRef = useRef<SketchCanvasRef>(null);
  return (
    <>
      <ScrollView
        contentContainerStyle={styles.content}
        horizontal={true}
        scrollEnabled={false}
      >
        <View style={styles.container}>
          <SketchCanvas
            ref={canvasRef}
            strokeColor={'black'}
            strokeWidth={8}
            containerStyle={styles.container}
          />
          <Button onPress={canvasRef.current?.reset} title="Reset" />
        </View>
      </ScrollView>
      <DrawToolBar />
    </>
  );
};
