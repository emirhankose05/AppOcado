import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHomeTab = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 30 30"
    {...props}>
    <Path
      fill="#CCD3AE"
      d="M4.5 30V15.882H0L15 0l6 6.353V1.765h4.5v9.353l4.5 4.764h-4.5V30h-9V19.412h-3V30zm3-3.53h3V15.883h9v10.589h3V12.706L15 4.765l-7.5 7.94zM12 12.398h6q0-1.412-.9-2.316-.9-.905-2.1-.905t-2.1.905-.9 2.316"
    />
  </Svg>
);
export default SvgHomeTab;
