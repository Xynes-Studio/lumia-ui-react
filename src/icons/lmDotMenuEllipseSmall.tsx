"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmDotMenuEllipseSmall: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM3.5 7C3.5 7.82843 2.82843 8.5 2 8.5C1.17157 8.5 0.5 7.82843 0.5 7C0.5 6.17157 1.17157 5.5 2 5.5C2.82843 5.5 3.5 6.17157 3.5 7ZM2 13.5C2.82843 13.5 3.5 12.8284 3.5 12C3.5 11.1716 2.82843 10.5 2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5Z" fill={color}/>

    </svg>
  );
};