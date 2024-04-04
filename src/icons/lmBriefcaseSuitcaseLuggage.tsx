"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmBriefcaseSuitcaseLuggage: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5H6ZM4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5H16C17.1046 5 18 5.89543 18 7V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V7C0 5.89543 0.895431 5 2 5H4ZM2 16L2 7H16V16H2Z" fill={color}/>

    </svg>
  );
};