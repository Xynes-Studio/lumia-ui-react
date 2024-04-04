"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPlusInCircleAdd: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM10 6C10 5.44772 9.55228 5 9 5C8.44772 5 8 5.44772 8 6V8H6C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10H8V12C8 12.5523 8.44772 13 9 13C9.55228 13 10 12.5523 10 12V10H12C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8H10V6Z" fill={color}/>

    </svg>
  );
};