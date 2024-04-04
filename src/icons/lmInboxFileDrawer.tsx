"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmInboxFileDrawer: React.FC<AssetProps> = ({
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
    <path d="M1 9V14C1 14.5523 1.44772 15 2 15H16C16.5523 15 17 14.5523 17 14V9M1 9L3.75667 1.64888C3.90304 1.25857 4.27616 1 4.693 1H13.307C13.7238 1 14.097 1.25857 14.2433 1.64888L17 9M1 9C1 9 3.32784 9 5.00027 9C5.55255 9 5.95156 9.48225 6.22252 9.96349C6.55602 10.5558 7.33383 11 9 11C10.6662 11 11.444 10.5558 11.7775 9.96349C12.0484 9.48225 12.4475 9 12.9997 9C14.6722 9 17 9 17 9" stroke={color} stroke-width="2"/>

    </svg>
  );
};