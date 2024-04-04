"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmBatteryCharge100Full: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0C0.671573 0 0 0.671573 0 1.5V10.5C0 11.3284 0.671573 12 1.5 12H14.5C15.3284 12 16 11.3284 16 10.5V9H17H18V8V4V3H17H16V1.5C16 0.671574 15.3284 0 14.5 0H1.5Z" fill={color}/>

    </svg>
  );
};