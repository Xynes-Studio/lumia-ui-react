"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmExportEject: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 3.29289C13.0976 3.68342 13.0976 4.31658 12.7071 4.70711C12.3166 5.09763 11.6834 5.09763 11.2929 4.70711L10 3.41421V13C10 13.5523 9.55229 14 9 14C8.44772 14 8 13.5523 8 13L8 3.41421L6.70711 4.70711C6.31658 5.09763 5.68342 5.09763 5.29289 4.70711C4.90237 4.31658 4.90237 3.68342 5.29289 3.29289L8.29289 0.292894C8.68342 -0.0976312 9.31658 -0.0976312 9.70711 0.292894L12.7071 3.29289ZM18 11C18 10.4477 17.5523 10 17 10C16.4477 10 16 10.4477 16 11V16L2 16L2 11C2 10.4477 1.55229 10 1 10C0.447716 10 0 10.4477 0 11V17C0 17.5523 0.447715 18 1 18H17C17.5523 18 18 17.5523 18 17V11Z" fill={color}/>

    </svg>
  );
};