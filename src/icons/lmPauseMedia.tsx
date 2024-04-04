"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPauseMedia: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5022C0 0.67377 0.671573 0.00219727 1.5 0.00219727C2.32843 0.00219727 3 0.67377 3 1.5022V10.4978C3 11.3262 2.32843 11.9978 1.5 11.9978C0.671573 11.9978 0 11.3262 0 10.4978V1.5022ZM7 1.5022C7 0.67377 7.67157 0.00219727 8.5 0.00219727C9.32843 0.00219727 10 0.67377 10 1.5022V10.4978C10 11.3262 9.32843 11.9978 8.5 11.9978C7.67157 11.9978 7 11.3262 7 10.4978V1.5022Z" fill={color}/>

    </svg>
  );
};