"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmFourSquareMenuTile: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6V2H6V6H2ZM0 1C0 0.447715 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V7C8 7.55228 7.55228 8 7 8H1C0.447715 8 0 7.55228 0 7V1ZM12 6V2H16V6H12ZM10 1C10 0.447715 10.4477 0 11 0H17C17.5523 0 18 0.447715 18 1V7C18 7.55228 17.5523 8 17 8H11C10.4477 8 10 7.55228 10 7V1ZM2 12V16H6V12H2ZM1 10C0.447715 10 0 10.4477 0 11V17C0 17.5523 0.447715 18 1 18H7C7.55228 18 8 17.5523 8 17V11C8 10.4477 7.55228 10 7 10H1ZM12 16V12H16V16H12ZM10 11C10 10.4477 10.4477 10 11 10H17C17.5523 10 18 10.4477 18 11V17C18 17.5523 17.5523 18 17 18H11C10.4477 18 10 17.5523 10 17V11Z" fill={color}/>

    </svg>
  );
};