"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmShoppingCart2: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H4C4.44361 0 4.83419 0.292251 4.95937 0.717834L7.24824 8.5H14.2192L15.2192 4.5H9C8.44772 4.5 8 4.05228 8 3.5C8 2.94772 8.44772 2.5 9 2.5H16.5C16.8079 2.5 17.0987 2.64187 17.2882 2.88459C17.4777 3.1273 17.5448 3.44379 17.4701 3.74254L15.9701 9.74254C15.8589 10.1877 15.4589 10.5 15 10.5H6.5C6.05639 10.5 5.66581 10.2077 5.54063 9.78217L3.25176 2H1C0.447715 2 0 1.55228 0 1ZM8 13C8 14.1046 7.10457 15 6 15C4.89543 15 4 14.1046 4 13C4 11.8954 4.89543 11 6 11C7.10457 11 8 11.8954 8 13ZM15 15C16.1046 15 17 14.1046 17 13C17 11.8954 16.1046 11 15 11C13.8954 11 13 11.8954 13 13C13 14.1046 13.8954 15 15 15Z" fill={color}/>

    </svg>
  );
};