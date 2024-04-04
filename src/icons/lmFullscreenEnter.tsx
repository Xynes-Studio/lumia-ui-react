"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmFullscreenEnter: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 6C15.5523 6 16 5.55228 16 5V1C16 0.447715 15.5523 0 15 0H11C10.4477 0 10 0.447715 10 1C10 1.55228 10.4477 2 11 2H14V5C14 5.55228 14.4477 6 15 6ZM5 16C5.55228 16 6 15.5523 6 15C6 14.4477 5.55228 14 5 14H2L2 11C2 10.4477 1.55228 10 1 10C0.447715 10 0 10.4477 0 11V15C0 15.5523 0.447715 16 1 16H5ZM16 11C16 10.4477 15.5523 10 15 10C14.4477 10 14 10.4477 14 11V14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H15C15.5523 16 16 15.5523 16 15V11ZM5 0C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2L2 2L2 5C2 5.55228 1.55228 6 1 6C0.447715 6 0 5.55229 0 5V1C0 0.447715 0.447715 0 1 0H5Z" fill={color}/>

    </svg>
  );
};