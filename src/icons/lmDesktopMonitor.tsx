"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmDesktopMonitor: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11V2H16V11H2ZM0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1V12C18 12.5523 17.5523 13 17 13H10.1173L10.395 15.5H13C13.5523 15.5 14 15.9477 14 16.5C14 17.0523 13.5523 17.5 13 17.5H9.5H8.5H5C4.44772 17.5 4 17.0523 4 16.5C4 15.9477 4.44772 15.5 5 15.5H7.60496L7.88273 13H1C0.447716 13 0 12.5523 0 12V1Z" fill={color}/>

    </svg>
  );
};