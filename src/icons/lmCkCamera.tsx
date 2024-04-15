"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkCamera: React.FC<AssetProps> = ({
  size = 1,
  color = globalColors.foreground,
  ...props
}) => {
  const [width, height] = useIconSize(23, 23, size);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 23 23`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <path d="M20 8.5V17.5C20 18.3281 19.3281 19 18.5 19H5.5C4.67187 19 4 18.3281 4 17.5V8.5C4 7.67188 4.67187 7 5.5 7H8.25L8.63437 5.97187C8.85312 5.3875 9.4125 5 10.0375 5H13.9594C14.5844 5 15.1437 5.3875 15.3625 5.97187L15.75 7H18.5C19.3281 7 20 7.67188 20 8.5ZM15.75 13C15.75 10.9313 14.0687 9.25 12 9.25C9.93125 9.25 8.25 10.9313 8.25 13C8.25 15.0688 9.93125 16.75 12 16.75C14.0687 16.75 15.75 15.0688 15.75 13ZM14.75 13C14.75 14.5156 13.5156 15.75 12 15.75C10.4844 15.75 9.25 14.5156 9.25 13C9.25 11.4844 10.4844 10.25 12 10.25C13.5156 10.25 14.75 11.4844 14.75 13Z" fill={color}/>

    </svg>
  );
};