"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmFrownSadFace: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM7 7C7.55228 7 8 6.55228 8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6C6 6.55228 6.44772 7 7 7ZM12 6C12 6.55228 11.5523 7 11 7C10.4477 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5C11.5523 5 12 5.44772 12 6ZM5.71151 12.2372C5.58053 12.6301 5.15579 12.8425 4.76283 12.7115C4.36987 12.5805 4.1575 12.1558 4.28849 11.7628C4.85757 10.0556 6.3747 8.25 9 8.25C11.6253 8.25 13.1424 10.0556 13.7115 11.7628C13.8425 12.1558 13.6301 12.5805 13.2372 12.7115C12.8442 12.8425 12.4195 12.6301 12.2885 12.2372C11.8576 10.9444 10.793 9.75 9 9.75C7.20702 9.75 6.14243 10.9444 5.71151 12.2372Z" fill={color}/>

    </svg>
  );
};