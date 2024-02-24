import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgRightArrow = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 7 10"
    {...props}>
    <Path fill="#000" d="M1.055 10 0 9.113 4.89 5 0 .888 1.055 0 7 5z" />
  </Svg>
);
export default SvgRightArrow;
