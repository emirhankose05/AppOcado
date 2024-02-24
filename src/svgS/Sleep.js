import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSleep = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 20 14"
    {...props}>
    <Path
      fill="#000"
      d="M0 14V8q0-.675.275-1.225A3.5 3.5 0 0 1 1 5.8V3q0-1.25.875-2.125A2.9 2.9 0 0 1 4 0h4q.575 0 1.075.213.5.212.925.587.425-.375.925-.587A2.7 2.7 0 0 1 12 0h4q1.25 0 2.125.875T19 3v2.8q.45.425.725.975T20 8v6h-2v-2H2v2zm11-9h6V3a.97.97 0 0 0-.288-.712A.97.97 0 0 0 16 2h-4a.97.97 0 0 0-.713.288A.97.97 0 0 0 11 3zM3 5h6V3a.97.97 0 0 0-.287-.712A.97.97 0 0 0 8 2H4a.97.97 0 0 0-.712.288A.97.97 0 0 0 3 3zm-1 5h16V8a.97.97 0 0 0-.288-.713A.97.97 0 0 0 17 7H3a.97.97 0 0 0-.712.287A.97.97 0 0 0 2 8z"
    />
  </Svg>
);
export default SvgSleep;
