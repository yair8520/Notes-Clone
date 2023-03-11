import React, { useEffect, useState } from 'react';
import { NText } from '../../Text';
import { TextAnimationProps } from './TextAnimationProps';
export const TextAnimation = ({ val }: TextAnimationProps) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((c) => {
        if (c.length === val.length) {
          // setTimeout(() => setCurrentText(' '), 2000); // Reset currentText after 1 second
          return c;
        }
        return val.substring(0, c.length + 1);
      });
    }, 200);
    console.log('here');
    return () => clearInterval(intervalId);
  }, [val]);

  return <NText>{currentText}</NText>;
};
