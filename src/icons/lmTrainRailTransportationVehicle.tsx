"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmTrainRailTransportationVehicle: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V13C16 14.1046 15.1046 15 14 15H13.4142L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L10.5858 15H5.41421L2.70711 17.7071C2.31658 18.0976 1.68342 18.0976 1.29289 17.7071C0.902369 17.3166 0.902369 16.6834 1.29289 16.2929L2.58579 15H2C0.895431 15 0 14.1046 0 13V3ZM2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V7C14 7.55228 13.5523 8 13 8H3C2.44772 8 2 7.55228 2 7V3ZM9.5 11.5C9.5 12.3284 8.82843 13 8 13C7.17157 13 6.5 12.3284 6.5 11.5C6.5 10.6716 7.17157 10 8 10C8.82843 10 9.5 10.6716 9.5 11.5Z" fill={color}/>

    </svg>
  );
};