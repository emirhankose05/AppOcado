import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgWater = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 16 18"
    {...props}>
    <Path
      fill="#000"
      d="M7.25 6.5q-1.146 0-2.25.323a7 7 0 0 0-2.042.969l.875 7.875h8.334l.916-8.334H12.5a8.3 8.3 0 0 1-1.437-.114q-.646-.115-1.771-.448a6 6 0 0 0-1-.208A9 9 0 0 0 7.25 6.5m-4.5-.52q1.062-.563 2.198-.855a9.3 9.3 0 0 1 4.781.042q1.042.291 1.594.396.552.104 1.177.104h.77l.355-3.334H2.375zm1.063 11.353q-.647 0-1.115-.416a1.57 1.57 0 0 1-.531-1.063L.5.667h15l-1.667 15.187q-.062.646-.53 1.063a1.62 1.62 0 0 1-1.116.416zm3.437-1.666h4.917-8.334z"
    />
  </Svg>
);
export default SvgWater;
