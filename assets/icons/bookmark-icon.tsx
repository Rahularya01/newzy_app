import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const BookmarkIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#006163"
      d="m12 18-4.2 1.8c-.667.283-1.3.23-1.9-.162-.6-.391-.9-.946-.9-1.663V5c0-.55.196-1.02.588-1.412A1.93 1.93 0 0 1 7 3h10c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v12.975c0 .717-.3 1.271-.9 1.663-.6.392-1.233.446-1.9.162L12 18Zm0-2.2 5 2.15V5H7v12.95l5-2.15ZM12 5H7h10-5Z"
    />
  </Svg>
);
