"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmRewindMedia: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.45163 6.83654C-0.151316 6.44175 -0.151316 5.5581 0.45163 5.16331L8.08527 0.165043C8.75033 -0.270422 9.63306 0.20671 9.63306 1.00166V4.63025L16.4526 0.165043C17.1176 -0.270422 18.0004 0.20671 18.0004 1.00166V10.9982C18.0004 11.7931 17.1176 12.2703 16.4526 11.8348L9.63306 7.3696V10.9982C9.63306 11.7931 8.75033 12.2703 8.08527 11.8348L0.45163 6.83654Z" fill={color}/>

    </svg>
  );
};