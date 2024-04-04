"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCameraPhoto: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.53518 0C6.86648 0 6.24201 0.334202 5.87108 0.8906L4.46482 3H2C0.89543 3 0 3.89543 0 5V14C0 15.1046 0.895431 16 2 16H16C17.1046 16 18 15.1046 18 14V5C18 3.89543 17.1046 3 16 3H13.5352L12.1289 0.8906C11.758 0.334202 11.1335 0 10.4648 0H7.53518ZM7.53518 2H10.4648L11.8711 4.1094C12.242 4.6658 12.8665 5 13.5352 5H16V14H2V5H4.46482C5.13352 5 5.75799 4.6658 6.12892 4.1094L7.53518 2ZM11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9ZM13 9C13 11.2091 11.2091 13 9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9Z" fill={color}/>

    </svg>
  );
};