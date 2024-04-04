"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmPieChartGraph: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8478 10.4587C15.1767 13.6246 12.3658 16 9 16C7.31843 16 5.77534 15.4071 4.56841 14.4189L9.36035 10.0262L15.8478 10.4587ZM15.9797 8.46309L10 8.06445V2.07089C13.2185 2.53126 15.7308 5.18101 15.9797 8.46309ZM8 2.07089C4.60771 2.55612 2 5.47353 2 9C2 10.4632 2.44895 11.8216 3.21662 12.9449L8 8.5601V2.07089ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill={color}/>

    </svg>
  );
};