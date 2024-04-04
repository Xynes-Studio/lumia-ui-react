"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmMailEmailLetter: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.63393V2H16V2.63393C15.9815 2.64462 15.9633 2.65595 15.9453 2.66795L9 7.29815L2.0547 2.66795C2.0367 2.65595 2.01846 2.64462 2 2.63393ZM2 5.03518V12H16V5.03518L9.5547 9.33205C9.2188 9.55598 8.7812 9.55598 8.4453 9.33205L2 5.03518ZM0 1C0 0.447716 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1V13C18 13.5523 17.5523 14 17 14H1C0.447716 14 0 13.5523 0 13V1Z" fill={color}/>

    </svg>
  );
};