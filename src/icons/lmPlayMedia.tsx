"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPlayMedia: React.FC<AssetProps> = ({
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
    <path d="M8.57084 5.14251C9.21818 5.53091 9.21818 6.46909 8.57084 6.85749L1.5145 11.0913C0.847972 11.4912 0 11.0111 0 10.2338V1.76619C0 0.988896 0.847971 0.508783 1.5145 0.908697L8.57084 5.14251Z" fill={color}/>

    </svg>
  );
};