import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
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
      console.log('Signed in user:', user);
      return user;
    })
    .catch((error) => {
      console.log({ error });
      if (error.code === 'auth/user-not-found') {
        throw {
          field: 'errorEmail',
          value: 'That email address is not registered!',
        };
      }
      if (error.code === 'auth/wrong-password') {
        throw {
          field: 'errorPass',
          value: 'Incorrect password!',
        };
      }

      console.log(error);
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
