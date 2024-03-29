import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgStep = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 9 13"
    {...props}>
    <Path
      fill="#000"
      d="m.692 15 1.939-9.837-1.246.488v2.372H0V4.744l3.496-1.5q.243-.104.51-.122.27-.018.511.07.243.087.459.244t.355.401l.692 1.116q.45.733 1.22 1.204.771.47 1.757.47v1.396q-1.212 0-2.163-.506a5.6 5.6 0 0 1-1.627-1.29l-.433 2.145L6.23 9.767V15H4.846v-4.535L3.392 9.35 2.146 15zm4.5-12.21q-.57 0-.978-.41a1.35 1.35 0 0 1-.406-.985q0-.575.406-.985.408-.41.978-.41.572 0 .978.41t.407.985-.407.986q-.406.41-.978.41"
    />
  </Svg>
);
export default SvgStep;
