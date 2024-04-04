"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCalendarDate1: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C4.55228 0 5 0.447715 5 1V4C5 4.55229 4.55228 5 4 5C3.44772 5 3 4.55229 3 4V1C3 0.447715 3.44772 0 4 0ZM12 3H6V4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4V3H1.5C0.671573 3 0 3.67157 0 4.5V5.5V7V16.5C0 17.3284 0.671573 18 1.5 18H16.5C17.3284 18 18 17.3284 18 16.5V7V5.5V4.5C18 3.67157 17.3284 3 16.5 3H16V4C16 5.10457 15.1046 6 14 6C12.8954 6 12 5.10457 12 4V3ZM2 8V16H16V8H2ZM15 1C15 0.447715 14.5523 0 14 0C13.4477 0 13 0.447715 13 1V4C13 4.55229 13.4477 5 14 5C14.5523 5 15 4.55229 15 4V1Z" fill={color}/>

    </svg>
  );
};