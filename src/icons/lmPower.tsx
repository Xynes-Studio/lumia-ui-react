"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPower: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V10C7 10.5523 7.44772 11 8 11C8.55229 11 9 10.5523 9 10V1ZM3.68433 3.26274C4.28118 2.87963 5 3.35591 5 4.06513V4.22591C5 4.58287 4.80577 4.90751 4.51534 5.11506C2.99259 6.20325 2 7.98571 2 10C2 13.3137 4.68629 16 8 16C11.3137 16 14 13.3137 14 10C14 7.98571 13.0074 6.20325 11.4847 5.11506C11.1942 4.90751 11 4.58287 11 4.22591V4.06513C11 3.35591 11.7188 2.87963 12.3157 3.26274C14.5317 4.68521 16 7.17114 16 10C16 14.4183 12.4183 18 8 18C3.58172 18 0 14.4183 0 10C0 7.17114 1.46828 4.68521 3.68433 3.26274Z" fill={color}/>

    </svg>
  );
};