"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkMoon: React.FC<AssetProps> = ({
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
    <path d="M21.4 13.7C20.6 13.9 19.8 14 19 14C14 14 10 10 10 5.00001C10 4.20001 10.1 3.40001 10.3 2.60001C10.4 2.30001 10.3 1.90001 10 1.60001C9.7 1.30001 9.4 1.20001 9 1.30001C4.3 2.70001 1 7.10001 1 12C1 18.1 5.9 23 12 23C16.9 23 21.3 19.7 22.6 14.9C22.7 14.6 22.6 14.2 22.3 13.9C22.1 13.7 21.7 13.6 21.4 13.7Z" fill={color}/>

    </svg>
  );
};