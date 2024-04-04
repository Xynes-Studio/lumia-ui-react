"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmImportDownload: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 10.7071C13.0976 10.3166 13.0976 9.68342 12.7071 9.29289C12.3166 8.90237 11.6834 8.90237 11.2929 9.29289L10 10.5858V1C10 0.447715 9.55229 0 9 0C8.44772 0 8 0.447715 8 1L8 10.5858L6.70711 9.29289C6.31658 8.90237 5.68342 8.90237 5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071L8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L12.7071 10.7071ZM18 11C18 10.4477 17.5523 10 17 10C16.4477 10 16 10.4477 16 11V16L2 16L2 11C2 10.4477 1.55229 10 1 10C0.447716 10 0 10.4477 0 11V17C0 17.5523 0.447715 18 1 18H17C17.5523 18 18 17.5523 18 17V11Z" fill={color}/>

    </svg>
  );
};