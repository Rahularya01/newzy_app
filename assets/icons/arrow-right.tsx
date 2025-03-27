import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const ArrowRightIcon = (props: SvgProps) => (
  <Svg width={28} height={16} fill="none" {...props}>
    <Path
      fill="#006163"
      d="M27.707 8.707a1 1 0 0 0 0-1.414L21.343.929a1 1 0 1 0-1.414 1.414L25.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM0 9h27V7H0v2Z"
    />
  </Svg>
);
