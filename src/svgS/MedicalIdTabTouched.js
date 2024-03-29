import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const SvgMedicalIdTabTouched = props => (
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
      d="m23.636 40-4.33-4.75a142 142 0 0 1-4.21-4.833q-1.755-2.125-2.897-4t-1.67-3.625A12.6 12.6 0 0 1 10 19.125q0-3.917 2.148-6.52Q14.295 10 17.5 10q1.773 0 3.375.917 1.603.916 2.761 2.583 1.16-1.666 2.762-2.583T29.773 10q2.863 0 5.216 2.458 2.352 2.459 2.352 6.667 0 .584-.068 1.23-.069.645-.205 1.312H34.17q.171-.75.273-1.417.102-.666.102-1.25 0-3.125-1.704-4.396-1.706-1.27-3.068-1.27-1.74 0-3 1.145-1.262 1.146-2.352 3.021h-1.569q-1.056-1.875-2.403-3.02-1.346-1.147-2.949-1.147-1.944 0-3.358 1.646t-1.415 4.146q0 1.375.477 2.792.478 1.416 1.705 3.27t3.341 4.334Q20.364 32 23.636 35.5q.887-.959 2.08-2.208a56 56 0 0 0 1.909-2.084l.307.375.665.813.664.812.307.375q-.75.834-1.909 2.063t-2.045 2.187zm5.455-11.667V25H40v3.333z"
    />
  </Svg>
);
export default SvgMedicalIdTabTouched;
