/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React from 'react';
import { LoadingProps } from './LoadingProps';
import styles from './LoadingStyles';
import Lottie from 'lottie-react-native';
import { Layout } from '../../Components/Layout';
import InitialStore from '../../Hooks/InitialStore/InitialStore';
import { NText } from '../../Components';

export const Loading = ({ navigation }: LoadingProps) => {
  InitialStore(navigation);

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
        <NText variant="H3">Retrieving your data...</NText>
      </View>
    </Layout>
  );
};
