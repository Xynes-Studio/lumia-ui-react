"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmMapLocationMarker: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.33333C2 3.70376 3.85715 2 6 2C8.14285 2 10 3.70376 10 6.33333C10 6.68773 9.87295 7.32872 9.537 8.26353C9.21546 9.15824 8.75813 10.1732 8.23167 11.22C7.51439 12.6464 6.70039 14.0699 6 15.2372C5.29961 14.0699 4.48561 12.6464 3.76833 11.22C3.24187 10.1732 2.78454 9.15824 2.463 8.26353C2.12705 7.32872 2 6.68773 2 6.33333ZM6 0C2.68629 0 0 2.66667 0 6.33333C0 9.1552 3.5537 15.1359 5.19125 17.742C5.5709 18.3462 6.4291 18.3462 6.80875 17.742C8.4463 15.1359 12 9.1552 12 6.33333C12 2.66667 9.31371 0 6 0ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill={color}/>

    </svg>
  );
};