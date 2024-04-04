"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmExclamationWarning: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V9.53333C0 10.0856 0.447716 10.5333 1 10.5333C1.55229 10.5333 2 10.0856 2 9.53333L2 1ZM1 14C1.55228 14 2 13.5523 2 13C2 12.4477 1.55228 12 1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14Z" fill={color}/>

    </svg>
  );
};