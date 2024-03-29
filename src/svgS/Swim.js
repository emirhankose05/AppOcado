import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSwim = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 20 18"
    {...props}>
    <Path
      fill="#000"
      d="M0 18v-2q.95 0 1.425-.5T3.3 15t1.925.5 1.425.5 1.425-.5T10 15t1.925.5 1.425.5 1.425-.5T16.7 15t1.875.5T20 16v2q-1.476 0-1.937-.5Q17.6 17 16.7 17t-1.425.5-1.925.5-1.925-.5T10 17t-1.425.5-1.925.5-1.925-.5T3.3 17t-1.362.5T0 18m0-4.5v-2q.95 0 1.425-.5t1.875-.5 1.938.5 1.412.5q.9 0 1.425-.5T10 10.5t1.925.5 1.425.5 1.425-.5 1.925-.5 1.875.5 1.425.5v2q-1.476 0-1.937-.5-.463-.5-1.363-.5t-1.387.5-1.963.5q-1.425 0-1.937-.5-.513-.5-1.413-.5-.95 0-1.412.5-.463.5-1.938.5T4.687 13 3.3 12.5t-1.362.5T0 13.5m4.9-5.1 3.325-3.325-1-1q-.825-.825-1.75-1.2T3.2 2.5V0q1.875 0 3.1.413T8.7 2l6.4 6.4q-.425.275-.825.438A2.4 2.4 0 0 1 13.35 9q-.9 0-1.425-.5T10 8t-1.925.5T6.65 9q-.525 0-.925-.162A5 5 0 0 1 4.9 8.4M14.7 0q1.05 0 1.775.738.725.737.725 1.762 0 1.05-.725 1.775T14.7 5t-1.775-.725T12.2 2.5q0-1.024.725-1.762A2.4 2.4 0 0 1 14.7 0"
    />
  </Svg>
);
export default SvgSwim;
