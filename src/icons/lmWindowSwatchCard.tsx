"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmWindowSwatchCard: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1V17C0 17.5523 0.447715 18 1 18H17C17.5523 18 18 17.5523 18 17V1C18 0.447715 17.5523 0 17 0H1ZM3 12C2.44772 12 2 11.5523 2 11V3C2 2.44772 2.44772 2 3 2H15C15.5523 2 16 2.44772 16 3V11C16 11.5523 15.5523 12 15 12H3Z" fill={color}/>

    </svg>
  );
};