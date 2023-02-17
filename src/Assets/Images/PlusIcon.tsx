import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const PlusIcon = (props: any) => (
  <Svg
    width={50}
    height={50}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G stroke="#000" strokeWidth={1.5}>
      <Path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" />
      <Path d="M12 7.757v8.486M16.25 12H7.765" strokeLinecap="round" />
    </G>
  </Svg>
);

export default PlusIcon;
