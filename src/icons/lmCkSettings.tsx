"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkSettings: React.FC<AssetProps> = ({
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
    <path d="M19 12.77V11.17L17.06 10.53L16.61 9.44001L17.49 7.60001L16.36 6.47001L14.55 7.38001L13.46 6.93001L12.77 5.01001H11.17L10.54 6.95001L9.43 7.40001L7.59 6.52001L6.46 7.65001L7.37 9.46001L6.92 10.55L5 11.23V12.82L6.94 13.46L7.39 14.55L6.51 16.39L7.64 17.52L9.45 16.61L10.54 17.06L11.23 18.98H12.82L13.45 17.04L14.56 16.59L16.4 17.47L17.53 16.34L16.61 14.53L17.08 13.44L19 12.75V12.77ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9.00001 12 9.00001C13.66 9.00001 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill={color}/>

    </svg>
  );
};