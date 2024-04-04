"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCalendarDate3: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.5C5.55228 0.5 6 0.947715 6 1.5V3H12V1.5C12 0.947715 12.4477 0.5 13 0.5C13.5523 0.5 14 0.947715 14 1.5V3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H2C0.89543 17 0 16.1046 0 15V5C0 3.89543 0.895431 3 2 3H4V1.5C4 0.947715 4.44772 0.5 5 0.5ZM12 5V5.5C12 6.05228 12.4477 6.5 13 6.5C13.5523 6.5 14 6.05228 14 5.5V5H16V15H2L2 5H4V5.5C4 6.05228 4.44772 6.5 5 6.5C5.55228 6.5 6 6.05228 6 5.5V5H12Z" fill={color}/>

    </svg>
  );
};