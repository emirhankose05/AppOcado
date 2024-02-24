import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgBack = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 12 20"
    {...props}>
    <Path
      fill="#CCD3AE"
      d="m9.628.032 1.71 1.71-7.92 7.927 7.92 7.926-1.71 1.71L0 9.669z"
    />
  </Svg>
);
export default SvgBack;
