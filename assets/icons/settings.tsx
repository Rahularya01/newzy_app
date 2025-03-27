import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const SettingsIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 21h-4l-.551-2.48a7 7 0 0 1-1.819-1.05l-2.424.763-2-3.464 1.872-1.718a7 7 0 0 1 0-2.1L3.206 9.232l2-3.464 2.424.763A7 7 0 0 1 9.45 5.48L10 3h4l.551 2.48c.656.257 1.269.61 1.82 1.05l2.423-.763 2 3.464-1.872 1.718a7 7 0 0 1 0 2.1l1.872 1.718-2 3.464-2.424-.763a7 7 0 0 1-1.819 1.052l-.55 2.48Z"
    />
    <Path
      stroke="currentColor"
      strokeWidth={2}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
);
