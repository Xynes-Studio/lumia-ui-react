"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmSubwayTransportationVehicle: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V11C16 12.7824 14.8342 14.2924 13.2236 14.8094L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L10.5858 15H5.41421L2.70711 17.7071C2.31658 18.0976 1.68342 18.0976 1.29289 17.7071C0.902369 17.3166 0.902369 16.6834 1.29289 16.2929L2.7764 14.8094C1.16576 14.2924 0 12.7824 0 11V3ZM3 2C2.44772 2 2 2.44772 2 3V7C2 7.55228 2.44772 8 3 8H7V2H3ZM5 11.5C5 12.3284 4.32843 13 3.5 13C2.67157 13 2 12.3284 2 11.5C2 10.6716 2.67157 10 3.5 10C4.32843 10 5 10.6716 5 11.5ZM14 11.5C14 12.3284 13.3284 13 12.5 13C11.6716 13 11 12.3284 11 11.5C11 10.6716 11.6716 10 12.5 10C13.3284 10 14 10.6716 14 11.5ZM9 2H13C13.5523 2 14 2.44772 14 3V7C14 7.55228 13.5523 8 13 8H9V2Z" fill={color}/>

    </svg>
  );
};