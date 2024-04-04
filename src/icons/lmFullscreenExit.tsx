"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmFullscreenExit: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C10.4477 0 10 0.447715 10 1V5C10 5.55228 10.4477 6 11 6H15C15.5523 6 16 5.55228 16 5C16 4.44772 15.5523 4 15 4H12V1C12 0.447715 11.5523 0 11 0ZM1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12H4V15C4 15.5523 4.44772 16 5 16C5.55228 16 6 15.5523 6 15V11C6 10.4477 5.55228 10 5 10H1ZM10 15C10 15.5523 10.4477 16 11 16C11.5523 16 12 15.5523 12 15V12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H11C10.4477 10 10 10.4477 10 11V15ZM1 6C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4L4 4V1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1V5C6 5.55228 5.55228 6 5 6H1Z" fill={color}/>

    </svg>
  );
};