import { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export const useOnFireBaseMessage = () => {
  useEffect(() => {
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Received background message:', remoteMessage);
    });
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('remoteMessage', remoteMessage);
      Alert.alert(
        remoteMessage?.notification?.title || 'test',
        remoteMessage?.notification?.body || 'test'
      );
    });

    return unsubscribe;
  }, []);
};
