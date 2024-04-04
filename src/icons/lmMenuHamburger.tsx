"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmMenuHamburger: React.FC<AssetProps> = ({
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.5 1C0.5 0.447715 0.947715 0 1.5 0H16.5C17.0523 0 17.5 0.447715 17.5 1C17.5 1.55228 17.0523 2 16.5 2H1.5C0.947715 2 0.5 1.55228 0.5 1ZM0.5 7C0.5 6.44772 0.947715 6 1.5 6H16.5C17.0523 6 17.5 6.44772 17.5 7C17.5 7.55228 17.0523 8 16.5 8H1.5C0.947715 8 0.5 7.55228 0.5 7ZM1.5 12C0.947715 12 0.5 12.4477 0.5 13C0.5 13.5523 0.947715 14 1.5 14H16.5C17.0523 14 17.5 13.5523 17.5 13C17.5 12.4477 17.0523 12 16.5 12H1.5Z"
        fill={color}
      />
    </svg>
  );
};
