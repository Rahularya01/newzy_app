import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

export const ListenIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#006163"
        d="m17.26 5.94-.204.472a.422.422 0 0 1-.779 0l-.205-.472a3.633 3.633 0 0 0-1.85-1.875l-.632-.283a.442.442 0 0 1 0-.802l.597-.266A3.641 3.641 0 0 0 16.063.776l.212-.51a.422.422 0 0 1 .785 0l.21.509a3.641 3.641 0 0 0 1.876 1.94l.598.266a.442.442 0 0 1 0 .801l-.633.282a3.633 3.633 0 0 0-1.85 1.876M7.084 5H5.416v10h1.667V5Zm-3.75 3.333H1.666v3.334h1.667V8.333Zm7.5-6.666H9.166v16.666h1.667V1.667Zm3.75 5h-1.667V15h1.667V6.667Zm3.75 1.666h-1.666v3.334h1.666V8.333Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
