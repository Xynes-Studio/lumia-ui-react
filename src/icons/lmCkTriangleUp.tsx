"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkTriangleUp: React.FC<AssetProps> = ({
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
    <path d="M12.8 5.39997C12.423 4.89597 11.577 4.89597 11.2 5.39997L2.19999 17.4C1.97199 17.703 1.93599 18.108 2.10499 18.447C2.27499 18.786 2.62099 19 2.99999 19H21C21.379 19 21.725 18.786 21.895 18.447C22.064 18.108 22.028 17.703 21.8 17.4L12.8 5.39997Z" fill={color}/>

    </svg>
  );
};