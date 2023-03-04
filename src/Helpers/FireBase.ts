import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const collectionRef = firestore().collection('users');

export const signOut = () =>
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));

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
          value: 'That email address is already in use!',
        };
      }
      if (error.code === 'auth/invalid-email') {
        throw {
          field: 'errorEmail',
          value: 'That email address is invalid!',
        };
      }
      if (error.code === 'auth/weak-password') {
        throw {
          field: 'errorPass',
          value: 'Password should be at least 6 characters',
        };
      }

      console.log(error);
    });

export const addToFirestore = (data: Array<any>) => {
  collectionRef
    .doc(auth().currentUser?.email!)
    .update({
      categories: firestore.FieldValue.arrayUnion(...data),
    })
    .then(() => {
      console.log('Array added to Firestore');
    })
    .catch((e) => {
      console.log('Error adding array to Firestore', e);
    });
};
