import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const HeartFilled = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="currentColor"
      d="m12 8 .76-1c.88-1.16 2.18-2 3.74-2C18.99 5 21 7.01 21 9.5c0 .93-.28 1.79-.76 2.5-.81 1.21-8.24 9-8.24 9s-7.43-7.79-8.24-9C3.28 11.29 3 10.43 3 9.5 3 7.01 5.01 5 7.5 5c1.56 0 2.87.84 3.74 2L12 8Z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 8-.76-1c-.88-1.16-2.18-2-3.74-2C5.01 5 3 7.01 3 9.5c0 .93.28 1.79.76 2.5.81 1.21 8.24 9 8.24 9m0-13 .76-1c.88-1.16 2.18-2 3.74-2C18.99 5 21 7.01 21 9.5c0 .93-.28 1.79-.76 2.5-.81 1.21-8.24 9-8.24 9"
    />
  </Svg>
);
