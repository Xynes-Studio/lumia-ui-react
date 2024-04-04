"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPhoneSmartphoneMobile: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2L7.86622 2C7.69331 2.2989 7.37014 2.5 7 2.5H5C4.62986 2.5 4.30669 2.2989 4.13378 2L2 2L2 16H10L10 2ZM12 1C12 0.447716 11.5523 0 11 0H1C0.447716 0 0 0.447716 0 1V17C0 17.5523 0.447715 18 1 18H11C11.5523 18 12 17.5523 12 17L12 1ZM7 13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13C5 12.4477 5.44772 12 6 12C6.55228 12 7 12.4477 7 13Z" fill={color}/>

    </svg>
  );
};