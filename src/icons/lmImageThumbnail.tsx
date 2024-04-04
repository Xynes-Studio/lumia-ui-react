"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmImageThumbnail: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11.6391V13V17C0 17.5523 0.447714 18 1 18H17C17.5523 18 18 17.5523 18 17V1C18 0.447716 17.5523 0 17 0H1C0.447716 0 0 0.447716 0 1V11.6391ZM2 12.5148L6.48782 8.37216L14.4624 16H2V13V12.5148ZM7.87026 6.92687L16 14.7031V2H2V9.79294L5.13126 6.90255C5.90743 6.18608 7.10694 6.19674 7.87026 6.92687ZM12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z" fill={color}/>

    </svg>
  );
};