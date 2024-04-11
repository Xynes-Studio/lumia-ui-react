"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkUpDown: React.FC<AssetProps> = ({
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
    <path d="M11.5 7.00002L11.9881 6.43057L11.5 6.01221L11.0119 6.43057L11.5 7.00002ZM11.5 16L11.0119 16.5695L11.5 16.9878L11.9881 16.5695L11.5 16ZM8.4881 10.5695L11.9881 7.56946L11.0119 6.43057L7.51191 9.43058L8.4881 10.5695ZM11.0119 7.56946L14.5119 10.5695L15.4881 9.43058L11.9881 6.43057L11.0119 7.56946ZM7.51191 13.5695L11.0119 16.5695L11.9881 15.4306L8.4881 12.4306L7.51191 13.5695ZM11.9881 16.5695L15.4881 13.5695L14.5119 12.4306L11.0119 15.4306L11.9881 16.5695Z" fill={color}/>

    </svg>
  );
};