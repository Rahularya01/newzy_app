import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const QuoteIcon = (props: SvgProps) => (
  <Svg width={34} height={34} fill="none" {...props}>
    <Path
      fill="#006163"
      fillRule="evenodd"
      d="M25.5 25.5a2.833 2.833 0 0 0 2.834-2.833v-4.25a2.833 2.833 0 0 0-2.834-2.834h-4.25a4.25 4.25 0 0 1 4.25-4.25h1.417a1.417 1.417 0 1 0 0-2.833H25.5a7.083 7.083 0 0 0-7.083 7.083v7.084A2.833 2.833 0 0 0 21.25 25.5h4.25Zm-12.75 0a2.833 2.833 0 0 0 2.834-2.833v-4.25a2.833 2.833 0 0 0-2.834-2.834H8.5a4.25 4.25 0 0 1 4.25-4.25h1.417a1.417 1.417 0 1 0 0-2.833H12.75a7.083 7.083 0 0 0-7.083 7.083v7.084A2.833 2.833 0 0 0 8.5 25.5h4.25Z"
      clipRule="evenodd"
    />
  </Svg>
);
