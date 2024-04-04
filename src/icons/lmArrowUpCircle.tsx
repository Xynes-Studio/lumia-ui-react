"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmArrowUpCircle: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM5.29289 7.29289C4.90237 7.68342 4.90237 8.31658 5.29289 8.70711C5.68342 9.09763 6.31658 9.09763 6.70711 8.70711L8 7.41421L8 13C8 13.5523 8.44772 14 9 14C9.55229 14 10 13.5523 10 13V7.41421L11.2929 8.70711C11.6834 9.09763 12.3166 9.09763 12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289L5.29289 7.29289Z" fill={color}/>

    </svg>
  );
};