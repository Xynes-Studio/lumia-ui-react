"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmSaveFloppy: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H4.5H2C0.895431 0 0 0.89543 0 2V16C0 17.1046 0.89543 18 2 18H16C17.1046 18 18 17.1046 18 16V5.70156C18 5.24742 17.8454 4.8068 17.5617 4.45217L14.6005 0.75061C14.2209 0.276179 13.6463 0 13.0388 0H12ZM13.0387 2L13 2V4C13 5.10457 12.1046 6 11 6H5.5C4.39543 6 3.5 5.10457 3.5 4V2L2 2L2 16H16L16 5.70156L13.0387 2ZM11 4V2H5.5V4H11ZM10 11.5C10 12.3284 9.32843 13 8.5 13C7.67157 13 7 12.3284 7 11.5C7 10.6716 7.67157 10 8.5 10C9.32843 10 10 10.6716 10 11.5ZM12 11.5C12 13.433 10.433 15 8.5 15C6.567 15 5 13.433 5 11.5C5 9.567 6.567 8 8.5 8C10.433 8 12 9.567 12 11.5Z" fill={color}/>

    </svg>
  );
};