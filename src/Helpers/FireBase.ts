import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { fireBaseAuthErrorMsg } from './helper';
const collectionRef = firestore().collection('users');

export const signOut = () =>
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
export const signInToFirebase = ({ email, pass }: any) =>
  auth()
    .signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      const { user } = userCredential;
      return user;
    })
    .catch((error) => {
      if (error.code === 'auth/user-not-found') {
        throw {
          field: 'errorEmail',
          value: fireBaseAuthErrorMsg[error.code],
        };
      }
      if (error.code === 'auth/wrong-password') {
        throw {
          field: 'errorPass',
          value: fireBaseAuthErrorMsg[error.code],
        };
      }
      if (error.code === 'auth/invalid-email') {
        throw {
          field: 'errorEmail',
          value: fireBaseAuthErrorMsg[error.code],
        };
      }
    });
export const createAccount = ({ email, pass }: any) =>
  auth()
    .createUserWithEmailAndPassword(email, pass)
    .then((e) => {
      return e;
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        throw {
          field: 'errorEmail',
          value: fireBaseAuthErrorMsg[error.code],
        };
      }
      if (error.code === 'auth/invalid-email') {
        throw {
          field: 'errorEmail',
          value: fireBaseAuthErrorMsg[error.code],
        };
      }
      if (error.code === 'auth/weak-password') {
        throw {
          field: 'errorPass',
          value: fireBaseAuthErrorMsg[error.code],
        };
      }

      console.log(error);
    });

export const addToFirestore = (key: string, data: any) => {
  let newData;
  if (Array.isArray(data)) {
    newData = firestore.FieldValue.arrayUnion(...data);
  } else {
    newData = data;
  }
  collectionRef
    .doc(auth().currentUser?.email!)
    .set(
      {
        [key]: newData,
      },
      { merge: true }
    )
    .then(() => {
      console.log('Data added to Firestore');
    })
    .catch((e) => {
      console.log('Error adding data to Firestore', e);
    });
};
