"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPreviousBackwardsMedia: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1V11C2 11.5523 1.55228 12 1 12C0.447715 12 0 11.5523 0 11V1ZM4.42916 6.8575C3.78182 6.46909 3.78182 5.53091 4.42916 5.14251L11.4855 0.9087C12.152 0.508785 13 0.988898 13 1.76619V10.2338C13 11.0111 12.152 11.4912 11.4855 11.0913L4.42916 6.8575Z" fill={color}/>

    </svg>
  );
};