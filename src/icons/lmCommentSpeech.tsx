"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCommentSpeech: React.FC<AssetProps> = ({
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
    <path d="M4 12C4 11.4477 3.55228 11 3 11H2C1.44772 11 1 10.5523 1 10V2C1 1.44772 1.44772 1 2 1H16C16.5523 1 17 1.44772 17 2V10C17 10.5523 16.5523 11 16 11H12.3028C11.9079 11 11.5219 11.1169 11.1934 11.3359L4 16.1315L4 12Z" stroke={color} stroke-width="2" stroke-linejoin="round"/>

    </svg>
  );
};