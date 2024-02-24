import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const SvgHomeTabTouched = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 50 50"
    {...props}>
    <Rect width={50} height={50} fill="#A47850" rx={10} />
    <Path
      fill="#CCD3AE"
      d="M14.5 40V25.882H10L25 10l6 6.353v-4.588h4.5v9.353l4.5 4.764h-4.5V40h-9V29.412h-3V40zm3-3.53h3V25.883h9v10.589h3V22.706L25 14.765l-7.5 7.94zM22 22.398h6q0-1.412-.9-2.316t-2.1-.904-2.1.904-.9 2.316"
    />
  </Svg>
);
export default SvgHomeTabTouched;
