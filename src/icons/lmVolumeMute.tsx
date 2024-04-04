"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmVolumeMute: React.FC<AssetProps> = ({
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
    <path d="M0 5V9C0 9.55228 0.447715 10 1 10H3.58579C3.851 10 4.10536 10.1054 4.29289 10.2929L7.29289 13.2929C7.92286 13.9229 9 13.4767 9 12.5858V1.41421C9 0.523307 7.92286 0.0771422 7.29289 0.707107L4.29289 3.7071C4.10536 3.89464 3.851 4 3.58579 4H1C0.447715 4 0 4.44771 0 5Z" fill={color}/>

    </svg>
  );
};