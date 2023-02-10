/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { NSnackBar } from './Components/NSnackBar';
import { addMessage } from './Features/Links/LinkSlice';
import { getMessage } from './Features/Links/LinksSelectors';
import AppRouter from './Navigation/AppRouter';
import { useAppDispatch, useAppSelector } from './Redux';

const App = () => {
  const msg = useAppSelector(getMessage);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(addMessage({ msg: '' }));
    }, 1000);
  }, [msg]);
  return (
    <>
      <AppRouter />
      <NSnackBar visible={!!msg} message={msg} />
    </>
  );
};

export default App;
