import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useAppDispatch } from '../../Redux';
import { setInitialLinks } from '../../Features/Links/LinkSlice';
import { setInitialNotes } from '../../Features/Notes/NotesSlice';

const InitialStore = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    firestore()
      .collection('users')
      .doc(auth().currentUser?.email!)
      .get()
      .then((e) => {
        const data = e.data();
        if (data?.Links) {
          dispatch(setInitialLinks({ links: data.Links }));
        } else if (data?.notes) {
          console.log(data?.notes);
          dispatch(setInitialNotes({ notes: data.notes }));
        }
      });
  }, [dispatch]);
};

export default InitialStore;
