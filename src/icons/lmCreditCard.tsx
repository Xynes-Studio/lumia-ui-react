"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCreditCard: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H16V4H2V2ZM2 6L2 12H16V6H2ZM0 2C0 0.89543 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V12C18 13.1046 17.1046 14 16 14H2C0.89543 14 0 13.1046 0 12V2Z" fill={color}/>

    </svg>
  );
};