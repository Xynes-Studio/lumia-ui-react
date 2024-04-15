"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkDownload: React.FC<AssetProps> = ({
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
    <path d="M19.3469 10.3837L17.2898 8.32653L13.4694 12.2535V1.71429H10.5306V12.2535L6.71021 8.32653L4.65307 10.3837L12 17.8776L19.3469 10.3837ZM1.71429 19.3469V22.2857H22.2857V19.3469H1.71429Z" fill={color}/>

    </svg>
  );
};