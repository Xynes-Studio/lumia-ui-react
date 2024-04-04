"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmDoubleBackArrowReplyAll: React.FC<AssetProps> = ({
  size = 1,
  color = globalColors.foreground,
  ...props
}) => {
  const [width, height] = useIconSize(24, 24, size);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 0.292893C3.68342 -0.0976311 4.31658 -0.0976311 4.70711 0.292893C5.09763 0.683417 5.09763 1.31658 4.70711 1.70711L2.41421 4L4.70711 6.29289C5.09763 6.68342 5.09763 7.31658 4.70711 7.70711C4.31658 8.09763 3.68342 8.09763 3.29289 7.70711L0.292893 4.70711C-0.097631 4.31658 -0.097631 3.68342 0.292893 3.29289L3.29289 0.292893ZM7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L7.41421 3H9L9.04723 2.99999C10.0447 2.99968 12.0514 2.99905 13.8047 4.16795C15.6686 5.41055 17 7.78377 17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 8.21623 13.8314 6.58945 12.6953 5.83205C11.4768 5.0197 10.0197 5 9 5H7.41421L8.70711 6.29289C9.09763 6.68342 9.09763 7.31658 8.70711 7.70711C8.31658 8.09763 7.68342 8.09763 7.29289 7.70711L4.29289 4.70711C3.90237 4.31658 3.90237 3.68342 4.29289 3.29289L7.29289 0.292893Z" fill={color}/>

    </svg>
  );
};