"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPersonSittingPregnant: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C4.10457 4 5 3.10457 5 2C5 0.895431 4.10457 0 3 0C1.89543 0 1 0.895431 1 2C1 3.10457 1.89543 4 3 4ZM2.13278 5C1.53128 5 1.0659 5.52718 1.1405 6.12403L1.78101 11.2481C1.90612 12.2489 2.75692 13 3.76556 13H4H7H8L10.7713 17.6188C10.9132 17.8553 11.1688 18 11.4446 18C11.9706 18 12.3479 17.4929 12.1967 16.9891L11 13L10.4558 11.3675C10.2119 10.6357 9.57274 10.1172 8.82305 10.0175C8.93758 9.69978 9 9.35718 9 9C9 7.34315 7.65685 6 6 6C5.98896 6 5.97794 6.00006 5.96693 6.00018C5.61895 5.3978 4.96849 5 4.23444 5H2.13278ZM0 15C0 14.4477 0.447715 14 1 14H6.5C7.05228 14 7.5 14.4477 7.5 15C7.5 15.5523 7.05228 16 6.5 16H1C0.447715 16 0 15.5523 0 15Z" fill={color}/>

    </svg>
  );
};