import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const BookmarkFillIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="m10 15-3.5 1.5c-.556.236-1.083.191-1.583-.135s-.75-.788-.75-1.386V4.167c0-.459.163-.85.49-1.177.326-.326.718-.49 1.176-.49h8.334c.458 0 .85.163 1.177.49.327.327.49.719.49 1.177v10.812c0 .597-.25 1.06-.75 1.386-.5.327-1.029.372-1.584.135L10 15Z"
    />
  </Svg>
);
