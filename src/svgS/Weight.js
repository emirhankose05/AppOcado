import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgWeight = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 20 20"
    {...props}>
    <Path
      fill="#000"
      d="M11.4 19.9 10 18.5l3.55-3.55-8.5-8.5L1.5 10 .1 8.6l1.4-1.45-1.4-1.4 2.1-2.1L.8 2.2 2.2.8l1.45 1.4L5.75.1l1.4 1.4L8.6.1 10 1.5 6.45 5.05l8.5 8.5L18.5 10l1.4 1.4-1.4 1.45 1.4 1.4-2.1 2.1 1.4 1.45-1.4 1.4-1.45-1.4-2.1 2.1-1.4-1.4z"
    />
  </Svg>
);
export default SvgWeight;
