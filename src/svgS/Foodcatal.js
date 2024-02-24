import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgFoodcatal = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 15 20"
    {...props}>
    <Path
      fill="#000"
      d="M3 20v-9.15a4.12 4.12 0 0 1-2.137-1.4Q0 8.4 0 7V0h2v7h1V0h2v7h1V0h2v7q0 1.4-.862 2.45A4.12 4.12 0 0 1 5 10.85V20zm10 0v-8h-3V5q0-2.075 1.463-3.537Q12.926 0 15 0v20z"
    />
  </Svg>
);
export default SvgFoodcatal;
