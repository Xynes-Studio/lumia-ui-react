"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmFigmaLogoF: React.FC<AssetProps> = ({
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
    <path d="M6 9C6 7.34316 7.34315 6 8.99998 6C10.6568 6 12 7.34315 12 9C12 10.6569 10.6568 12 8.99998 12C7.34315 12 6 10.6568 6 9Z" fill={color}/>
<path d="M0 15C0 13.3431 1.34315 12 3 12H6V15C6 16.6569 4.65685 18 3 18C1.34315 18 0 16.6569 0 15Z" fill={color}/>
<path d="M6 0V6H9C10.6569 6 12 4.65685 12 3C12 1.34315 10.6569 0 9 0L6 0Z" fill={color}/>
<path d="M0 3C0 4.65685 1.34315 6 3 6L6 6L6 0L3 0C1.34315 0 0 1.34315 0 3Z" fill={color}/>
<path d="M0 9C0 10.6569 1.34315 12 3 12H6L6 6L3 6C1.34315 6 0 7.34315 0 9Z" fill={color}/>

    </svg>
  );
};