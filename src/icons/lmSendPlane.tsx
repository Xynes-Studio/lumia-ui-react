"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmSendPlane: React.FC<AssetProps> = ({
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
    <path d="M8.89951 10.5563L1.00002 7.72792L18.0919 1.36396L11.7279 18.4558L8.89951 10.5563ZM8.89951 10.5563L11.7279 7.72792" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

    </svg>
  );
};