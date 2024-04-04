"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmZoomOut: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 14C13.3137 14 16 11.3137 16 8C16 4.68629 13.3137 2 10 2C6.68629 2 4 4.68629 4 8C4 11.3137 6.68629 14 10 14ZM10 16C14.4183 16 18 12.4183 18 8C18 3.58172 14.4183 0 10 0C5.58172 0 2 3.58172 2 8C2 9.84871 2.62708 11.551 3.68014 12.9056L0.292893 16.2929C-0.0976311 16.6834 -0.0976311 17.3166 0.292893 17.7071C0.683417 18.0976 1.31658 18.0976 1.70711 17.7071L5.09436 14.3199C6.44904 15.3729 8.15129 16 10 16ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9H10H13C13.5523 9 14 8.55229 14 8C14 7.44772 13.5523 7 13 7H10H7Z" fill={color}/>

    </svg>
  );
};