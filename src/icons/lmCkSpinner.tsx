"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkSpinner: React.FC<AssetProps> = ({
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
    <g clip-path="url(#clip0_28_61102)">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} stroke-width="4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37243 0 0 5.37243 0 12H4C4 7.58157 7.58157 4 12 4C13.1046 4 14 3.10457 14 2C14 0.89543 13.1046 0 12 0Z" fill={color}/>
</g>
<defs >
<linearGradient id="paint0_linear_28_61102" x1="7.6308" y1="14.748" x2="16.9258" y2="5.5566" gradient-units="userSpaceOnUse">
<stop />
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0_28_61102">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>

    </svg>
  );
};