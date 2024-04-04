"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmTabletMobile: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2L14 2L14 16H2L2 2ZM15 0C15.5523 0 16 0.447716 16 1L16 17C16 17.5523 15.5523 18 15 18H1C0.447715 18 0 17.5523 0 17V1C0 0.447716 0.447717 0 1 0H15ZM7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14H9C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12H7Z" fill={color}/>

    </svg>
  );
};