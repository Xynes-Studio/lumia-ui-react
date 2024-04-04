"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmFilterFunnel: React.FC<AssetProps> = ({
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
    <path d="M15.1315 1H2.86852C2.06982 1 1.59343 1.89015 2.03647 2.5547L6.83205 9.74808C6.94156 9.91234 7 10.1054 7 10.3028V16.382C7 17.1253 7.78231 17.6088 8.44721 17.2764L10.4472 16.2764C10.786 16.107 11 15.7607 11 15.382V10.3028C11 10.1054 11.0584 9.91234 11.1679 9.74808L15.9635 2.5547C16.4066 1.89015 15.9302 1 15.1315 1Z" stroke={color} stroke-width="2"/>

    </svg>
  );
};