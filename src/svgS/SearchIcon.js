import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSearchIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 18 18"
    {...props}>
    <Path
      fill="#000"
      d="m16.6 18-6.3-6.3q-.75.6-1.725.95T6.5 13q-2.725 0-4.612-1.887T0 6.5t1.888-4.612T6.5 0t4.613 1.888T13 6.5a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zM6.5 11q1.875 0 3.188-1.312Q11 8.375 11 6.5T9.688 3.313 6.5 2 3.313 3.313 2 6.5t1.313 3.188T6.5 11"
    />
  </Svg>
);
export default SvgSearchIcon;
