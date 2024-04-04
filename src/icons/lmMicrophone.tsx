"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmMicrophone: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C7.10457 0 8 0.89543 8 2V8C8 9.10457 7.10457 10 6 10C4.89543 10 4 9.10457 4 8V2C4 0.89543 4.89543 0 6 0ZM1 7C1.55228 7 2 7.44772 2 8C2 10.2091 3.79086 12 6 12C8.20914 12 10 10.2091 10 8C10 7.44772 10.4477 7 11 7C11.5523 7 12 7.44772 12 8C12 10.9742 9.83601 13.4429 6.99665 13.9176C6.99887 13.9448 7 13.9723 7 14V16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H6H3C2.44772 18 2 17.5523 2 17C2 16.4477 2.44772 16 3 16H5V14C5 13.9723 5.00113 13.9448 5.00335 13.9176C2.16399 13.4429 0 10.9742 0 8C0 7.44772 0.447715 7 1 7Z" fill={color}/>

    </svg>
  );
};