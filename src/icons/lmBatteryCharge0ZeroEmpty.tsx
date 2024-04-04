"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmBatteryCharge0ZeroEmpty: React.FC<AssetProps> = ({
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
    <path d="M15 8V10.5C15 10.7761 14.7761 11 14.5 11H1.5C1.22386 11 1 10.7761 1 10.5V1.5C1 1.22386 1.22386 1 1.5 1H14.5C14.7761 1 15 1.22386 15 1.5V4M15 8H17V4H15M15 8V4" stroke={color} stroke-width="2"/>

    </svg>
  );
};