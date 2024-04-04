"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPersonSitting: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C5 3.10457 4.10457 4 3 4C1.89543 4 1 3.10457 1 2C1 0.895431 1.89543 0 3 0C4.10457 0 5 0.895431 5 2ZM1.1405 6.12403C1.0659 5.52718 1.53128 5 2.13278 5H4.23444C5.24308 5 6.09388 5.75107 6.21899 6.75193L6.625 10H8.55848C9.41934 10 10.1836 10.5509 10.4558 11.3675L11 13L12.1967 16.9891C12.3479 17.4929 11.9706 18 11.4446 18C11.1688 18 10.9132 17.8553 10.7713 17.6188L8 13H7H4H3.76556C2.75692 13 1.90612 12.2489 1.78101 11.2481L1.1405 6.12403ZM1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16H6.5C7.05228 16 7.5 15.5523 7.5 15C7.5 14.4477 7.05228 14 6.5 14H1Z" fill={color}/>

    </svg>
  );
};