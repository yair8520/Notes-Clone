import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useAppDispatch } from '../../Redux';
import { setInitialLinks } from '../../Features/Links/LinkSlice';
import { setInitialNotes } from '../../Features/Notes/NotesSlice';
import { setInitialTodos } from '../../Features/ToDo/ToDoSlice';

const InitialStore = (navigation: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    firestore()
      .collection('users')
      .doc(auth().currentUser?.email!)
      .get()
      .then((e) => {
        const data = e.data();
        dispatch(setInitialLinks({ links: data?.Links ?? {} }));
        dispatch(setInitialNotes({ notes: data?.notes ?? {} }));
        dispatch(setInitialTodos({ todos: data?.Todo ?? {} }));
      })
      .finally(() => {
        navigation.navigate('Home');
      });
  }, [dispatch, navigation]);
};

export default InitialStore;
