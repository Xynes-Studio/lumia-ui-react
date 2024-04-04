"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmEnvelopeOpenRead: React.FC<AssetProps> = ({
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
    <path d="M1 7V16C1 16.5523 1.44772 17 2 17H16C16.5523 17 17 16.5523 17 16V7M1 7L3 5M1 7L3 8.25M17 7L15 5M17 7L15 8.25M3 5V2C3 1.44772 3.44772 1 4 1H14C14.5523 1 15 1.44772 15 2V5M3 5V8.25M15 5V8.25M3 8.25L5 9.5L8.47 11.6688C8.79427 11.8714 9.20573 11.8714 9.53 11.6688L15 8.25" stroke={color} stroke-width="2" stroke-linejoin="round"/>

    </svg>
  );
};