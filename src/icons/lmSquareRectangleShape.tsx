"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmSquareRectangleShape: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2L2 16H16V2L2 2ZM1 0C0.447716 0 0 0.447714 0 1L0 17C0 17.5523 0.447714 18 1 18H17C17.5523 18 18 17.5523 18 17V1C18 0.447716 17.5523 0 17 0L1 0Z" fill={color}/>

    </svg>
  );
};