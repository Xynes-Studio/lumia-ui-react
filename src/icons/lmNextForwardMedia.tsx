"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmNextForwardMedia: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1C13 0.447715 12.5523 0 12 0C11.4477 0 11 0.447715 11 1V11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11V1ZM8.57084 6.85749C9.21818 6.46909 9.21818 5.53091 8.57084 5.1425L1.5145 0.908694C0.847971 0.50878 0 0.988893 0 1.76619V10.2338C0 11.0111 0.847972 11.4912 1.5145 11.0913L8.57084 6.85749Z" fill={color}/>

    </svg>
  );
};