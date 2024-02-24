import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCalori = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 16 19"
    {...props}>
    <Path
      fill="#000"
      d="M2 11q0 1.3.525 2.463t1.5 2.037A1 1 0 0 1 4 15.275v-.225q0-.8.3-1.5t.875-1.275L8 9.5l2.825 2.775q.575.575.875 1.275t.3 1.5v.225q0 .1-.025.225a6.1 6.1 0 0 0 1.5-2.037Q14 12.3 14 11q0-1.249-.463-2.363A6.1 6.1 0 0 0 12.2 6.65q-.5.326-1.05.487a4 4 0 0 1-1.125.163q-1.55 0-2.687-1.025A3.9 3.9 0 0 1 6.025 3.75Q5.05 4.574 4.3 5.463q-.75.886-1.262 1.8-.513.912-.775 1.862A7 7 0 0 0 2 11m6 1.3-1.425 1.4a2 2 0 0 0-.425.625q-.15.35-.15.725 0 .8.588 1.375Q7.175 17 8 17t1.412-.575T10 15.05q0-.4-.15-.738t-.425-.612zM8 0v3.3q0 .85.588 1.425.586.575 1.437.575.45 0 .838-.187.387-.189.687-.563L12 4a7.7 7.7 0 0 1 2.925 2.925A8.05 8.05 0 0 1 16 11q0 3.35-2.325 5.675T8 19t-5.675-2.325T0 11q0-3.225 2.163-6.125T8 0"
    />
  </Svg>
);
export default SvgCalori;