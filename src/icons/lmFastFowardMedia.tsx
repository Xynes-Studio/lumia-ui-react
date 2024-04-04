"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmFastFowardMedia: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.36654 7.37085L1.5479 11.8367C0.882839 12.2723 0 11.7952 0 11.0002V1.00166C0 0.20665 0.88284 -0.270469 1.5479 0.165115L8.36654 4.63102V1.00166C8.36654 0.206652 9.24938 -0.270467 9.91444 0.165116L17.5474 5.16439C18.1502 5.5592 18.1502 6.44267 17.5474 6.83748L9.91444 11.8367C9.24938 12.2723 8.36654 11.7952 8.36654 11.0002V7.37085Z" fill={color}/>

    </svg>
  );
};