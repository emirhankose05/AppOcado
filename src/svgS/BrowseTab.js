import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgBrowseTab = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 30 30"
    {...props}>
    <Path
      fill="#CCD3AE"
      d="m21.218 17.565-8.783-8.783L21.218 0 30 8.782zM0 14.456V2.021h12.435v12.435zM15.544 30V17.565h12.435V30zM0 30V17.565h12.435V30zm3.109-18.653h6.217V5.13H3.11zm18.147 1.865 4.392-4.39-4.392-4.392-4.39 4.391zm-2.603 13.68h6.218v-6.218h-6.218zm-15.544 0h6.217v-6.218H3.11z"
    />
  </Svg>
);
export default SvgBrowseTab;
