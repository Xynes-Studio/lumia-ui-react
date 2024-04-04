"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmBusTransportationVehicle: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.34315 2.34315 0 4 0H14C15.6569 0 17 1.34315 17 3C17.5523 3 18 3.44772 18 4V6C18 6.55228 17.5523 7 17 7V13C17 14.1046 16.1046 15 15 15V17C15 17.5523 14.5523 18 14 18H13C12.4477 18 12 17.5523 12 17V15H6V17C6 17.5523 5.55228 18 5 18H4C3.44772 18 3 17.5523 3 17V15C1.89543 15 1 14.1046 1 13V7C0.447715 7 0 6.55228 0 6V4C0 3.44772 0.447715 3 1 3ZM6.5 2C6.5 1.72386 6.72386 1.5 7 1.5H11C11.2761 1.5 11.5 1.72386 11.5 2C11.5 2.27614 11.2761 2.5 11 2.5H7C6.72386 2.5 6.5 2.27614 6.5 2ZM13.5 13C14.3284 13 15 12.3284 15 11.5C15 10.6716 14.3284 10 13.5 10C12.6716 10 12 10.6716 12 11.5C12 12.3284 12.6716 13 13.5 13ZM6 11.5C6 12.3284 5.32843 13 4.5 13C3.67157 13 3 12.3284 3 11.5C3 10.6716 3.67157 10 4.5 10C5.32843 10 6 10.6716 6 11.5ZM4 4C3.44772 4 3 4.44772 3 5V7C3 7.55228 3.44772 8 4 8H8V4H4ZM10 4H14C14.5523 4 15 4.44772 15 5V7C15 7.55228 14.5523 8 14 8H10V4Z" fill={color}/>

    </svg>
  );
};