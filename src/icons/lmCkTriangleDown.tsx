"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkTriangleDown: React.FC<AssetProps> = ({
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
    <path d="M21 5H3C2.621 5 2.275 5.214 2.105 5.553C1.937 5.892 1.973 6.297 2.2 6.6L11.2 18.6C11.388 18.852 11.685 19 12 19C12.315 19 12.611 18.852 12.8 18.6L21.8 6.6C22.028 6.297 22.064 5.892 21.895 5.553C21.725 5.214 21.379 5 21 5Z" fill={color}/>

    </svg>
  );
};