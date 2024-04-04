"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmArrowLeftCircle: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289C9.09763 5.68342 9.09763 6.31658 8.70711 6.70711L7.41421 8H13C13.5523 8 14 8.44772 14 9C14 9.55228 13.5523 10 13 10H7.41421L8.70711 11.2929C9.09763 11.6834 9.09763 12.3166 8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289L7.29289 5.29289Z" fill={color}/>

    </svg>
  );
};