"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmExitLeave: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C8.44771 0 8 0.447715 8 1V4C8 4.55228 8.44771 5 9 5C9.55229 5 10 4.55228 10 4V2H16V16H10V14C10 13.4477 9.55229 13 9 13C8.44771 13 8 13.4477 8 14V17C8 17.5523 8.44771 18 9 18H17C17.5523 18 18 17.5523 18 17V1C18 0.447715 17.5523 0 17 0H9ZM3.29289 5.29289C3.68342 4.90237 4.31658 4.90237 4.70711 5.29289C5.09763 5.68342 5.09763 6.31658 4.70711 6.70711L3.41421 8H13C13.5523 8 14 8.44772 14 9C14 9.55228 13.5523 10 13 10H3.41421L4.70711 11.2929C5.09763 11.6834 5.09763 12.3166 4.70711 12.7071C4.31658 13.0976 3.68342 13.0976 3.29289 12.7071L0.292894 9.70711C-0.0976312 9.31658 -0.0976312 8.68342 0.292894 8.29289L3.29289 5.29289Z" fill={color}/>

    </svg>
  );
};