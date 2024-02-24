import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgEkg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 20 20"
    {...props}>
    <Path
      fill="#000"
      d="M0 13.75v3.75q0 1.032.588 1.766Q1.175 20 2 20h16q.824 0 1.413-.734Q20 18.532 20 17.5v-3.75h-2v3.75H2v-3.75zM2 0Q1.176 0 .588.734 0 1.47 0 2.5v3.75h2V2.5h16v3.75h2V2.5q0-1.03-.587-1.766Q18.825 0 18 0zm6 3.75q.274 0 .525.172.25.171.375.515l3.1 7.75 1.1-2.75q.124-.343.375-.515A.9.9 0 0 1 14 8.75h6v2.5h-5.375L12.9 15.563q-.124.343-.375.484a1.06 1.06 0 0 1-1.05 0q-.25-.14-.375-.485L8 7.813l-1.1 2.75q-.125.345-.375.516A.9.9 0 0 1 6 11.25H0v-2.5h5.375L7.1 4.438q.125-.345.375-.516A.9.9 0 0 1 8 3.75"
    />
  </Svg>
);
export default SvgEkg;