"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCalendarDate2: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C5.55228 0 6 0.447715 6 1V4C6 4.55229 5.55228 5 5 5C4.44772 5 4 4.55229 4 4V1C4 0.447715 4.44772 0 5 0ZM11 2H7V4H11V2ZM15 4L16 4V6.5H2V4L3 4V2H1.5C0.671573 2 0 2.67157 0 3.5V7.5V15.5C0 16.3284 0.671573 17 1.5 17H16.5C17.3284 17 18 16.3284 18 15.5V7.5V3.5C18 2.67157 17.3284 2 16.5 2H15V4ZM16 8.5H2V15H16V8.5ZM14 1C14 0.447715 13.5523 0 13 0C12.4477 0 12 0.447715 12 1V4C12 4.55229 12.4477 5 13 5C13.5523 5 14 4.55229 14 4V1Z" fill={color}/>

    </svg>
  );
};