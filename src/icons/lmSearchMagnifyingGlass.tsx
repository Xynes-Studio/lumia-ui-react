"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmSearchMagnifyingGlass: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 11.3137 13.3137 14 10 14C6.68629 14 4 11.3137 4 8C4 4.68629 6.68629 2 10 2C13.3137 2 16 4.68629 16 8ZM18 8C18 12.4183 14.4183 16 10 16C8.15129 16 6.44904 15.3729 5.09436 14.3199L1.70711 17.7071C1.31658 18.0976 0.683418 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L3.68014 12.9056C2.62708 11.551 2 9.84871 2 8C2 3.58172 5.58172 0 10 0C14.4183 0 18 3.58172 18 8Z" fill={color}/>

    </svg>
  );
};