/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React, { useEffect } from 'react';
import { LoadingProps } from './LoadingProps';
import styles from './LoadingStyles';
import Lottie from 'lottie-react-native';
import { Layout } from '../../Components/Layout';
import { NText } from '../../Components';

export const Loading = ({ navigation }: LoadingProps) => {
  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate('Home');
    // }, 15000);
  }, [navigation]);
  return (
    <Layout>
      <View style={styles.container}>
        <Lottie
          source={require('../../Assets/Images/LoadingAnim.json')}
          autoSize
          autoPlay
          loop={true}
          style={{ height: 500, width: 500 }}
        />
        <NText>Retrieving your data...</NText>
      </View>
    </Layout>
  );
};
