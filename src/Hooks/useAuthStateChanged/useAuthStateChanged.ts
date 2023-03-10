/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useAppDispatch } from '../../Redux';
import { setUserInfo } from '../../Features/General/GeneralSlice';
import SplashScreen from 'react-native-splash-screen';

export const useAuthStateChanged = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async (user) => {
      if (user) {
        const { uid, email } = user;
        console.log({ user });
        await saveUserToFirestore(uid, email!);
        dispatch(setUserInfo({ email, loggedIn: true }));
      } else {
        dispatch(setUserInfo({ email: '', loggedIn: false }));
      }
    });

    return () => subscriber();
  }, []);

  const saveUserToFirestore = async (uid: string, email: string) => {
    try {
      const userRef = firestore().collection('users').doc(email);
      const userDoc = await userRef.get();

      if (userDoc.exists) {
        await userRef.update({
          id: uid,
          updatedAt: new Date(),
        });
        console.log(email, 'User data updated in Firestore');
      } else {
        await userRef.set({
          id: uid,
          email: email,
          createdAt: new Date(),
        });
        console.log(email, 'User added to Firestore');
      }
    } catch (e) {
      console.log('error saving user', e);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);
};
