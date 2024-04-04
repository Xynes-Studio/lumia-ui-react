"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCommandAppleKeyLoopedSquare: React.FC<AssetProps> = ({
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
    <path d="M6 6V3.5C6 2.11929 4.88071 1 3.5 1V1C2.11929 1 1 2.11929 1 3.5V3.5C1 4.88071 2.11929 6 3.5 6H6ZM6 6V12M6 6H12M12 6H14.5C15.8807 6 17 4.88071 17 3.5V3.5C17 2.11929 15.8807 1 14.5 1V1C13.1193 1 12 2.11929 12 3.5V6ZM12 6V12M6 12H3.5C2.11929 12 1 13.1193 1 14.5V14.5C1 15.8807 2.11929 17 3.5 17V17C4.88071 17 6 15.8807 6 14.5V12ZM6 12H12M12 12H14.5C15.8807 12 17 13.1193 17 14.5V14.5C17 15.8807 15.8807 17 14.5 17V17C13.1193 17 12 15.8807 12 14.5V12Z" stroke={color} stroke-width="2"/>

    </svg>
  );
};