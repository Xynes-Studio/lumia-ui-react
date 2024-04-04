"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPaperclipAttachment: React.FC<AssetProps> = ({
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
    <path d="M1.82844 10.3137C1.82844 10.3137 6.07109 6.07107 9.60662 2.53553C11.9541 0.188068 14.98 0.837894 16.7127 2.5706C18.4455 4.3033 19.0251 7.25914 16.6777 9.6066C13.5841 12.7002 10.8441 15.4402 8.1924 18.0919C7.4853 18.799 5.68393 19.826 4.30332 18.4454C2.79122 16.9333 3.98483 15.2985 4.69193 14.5914C7.34358 11.9398 11.2327 8.05067 11.2327 8.05067" stroke={color} stroke-width="2" stroke-linecap="round"/>

    </svg>
  );
};