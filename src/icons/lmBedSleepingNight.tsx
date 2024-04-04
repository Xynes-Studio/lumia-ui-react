"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmBedSleepingNight: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C1.55228 0 2 0.447715 2 1V7H8V3C8 2.44772 8.44772 2 9 2H15.0406C16.4706 2 17.6932 3.01176 17.8297 4.43527C17.8998 5.16572 17.9605 6.03332 17.9865 7H18V8V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V9H2V11C2 11.5523 1.55228 12 1 12C0.447715 12 0 11.5523 0 11V8V1C0 0.447715 0.447715 0 1 0ZM5 6C6.10457 6 7 5.10457 7 4C7 2.89543 6.10457 2 5 2C3.89543 2 3 2.89543 3 4C3 5.10457 3.89543 6 5 6Z" fill={color}/>

    </svg>
  );
};