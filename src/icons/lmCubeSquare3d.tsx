"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCubeSquare3d: React.FC<AssetProps> = ({
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
    <path d="M1 6V16C1 16.5523 1.44772 17 2 17H12M1 6H12M1 6L5.70711 1.29289C5.89464 1.10536 6.149 1 6.41421 1H17M12 17V6M12 17L16.7071 12.2929C16.8946 12.1054 17 11.851 17 11.5858V1M12 6L17 1" stroke={color} stroke-width="2" stroke-linejoin="round"/>

    </svg>
  );
};