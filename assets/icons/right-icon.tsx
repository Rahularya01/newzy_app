import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const RightIcon = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5.667 17h22.667m0 0-8.5 8.5m8.5-8.5-8.5-8.5"
    />
  </Svg>
);
