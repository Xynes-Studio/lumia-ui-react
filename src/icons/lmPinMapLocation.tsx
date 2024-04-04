"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPinMapLocation: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6ZM7.43451 11.8274C10.0555 11.1844 12 8.81929 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 8.81929 1.94448 11.1844 4.56549 11.8274L5.00345 17.083C5.04665 17.6013 5.47991 18 6 18C6.52009 18 6.95335 17.6013 6.99655 17.083L7.43451 11.8274Z" fill={color}/>

    </svg>
  );
};