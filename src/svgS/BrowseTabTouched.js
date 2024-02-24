import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const SvgBrowseTabTouched = props => (
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
      d="m31.218 27.565-8.783-8.783L31.218 10 40 18.782zM10 24.456V12.021h12.435v12.435zM25.544 40V27.565h12.435V40zM10 40V27.565h12.435V40zm3.109-18.653h6.217V15.13H13.11zm18.148 1.865 4.39-4.39-4.39-4.392-4.392 4.391zm-2.604 13.68h6.218v-6.218h-6.218zm-15.544 0h6.217v-6.218H13.11z"
    />
  </Svg>
);
export default SvgBrowseTabTouched;
