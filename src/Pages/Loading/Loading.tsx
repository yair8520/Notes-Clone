/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React, { useEffect } from 'react';
import { LoadingProps } from './LoadingProps';
import styles from './LoadingStyles';
import Lottie from 'lottie-react-native';
import { Layout } from '../../Components/Layout';
import { TextAnimation } from '../../Components/Animations';
import InitialStore from '../../Hooks/InitialStore/InitialStore';

export const Loading = ({ navigation }: LoadingProps) => {
  InitialStore();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
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
        <TextAnimation val={'Retrieving your data...'} />
      </View>
    </Layout>
  );
};
