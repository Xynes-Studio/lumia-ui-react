"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmUnlockedLockPadlock: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 3.34315 5.34315 2 7 2C8.25744 2 9.33652 2.77394 9.7823 3.87521C9.98953 4.38715 10.5725 4.63416 11.0845 4.42694C11.5964 4.21971 11.8434 3.63672 11.6362 3.12479C10.8952 1.29423 9.09994 0 7 0C4.23858 0 2 2.23858 2 5V7C0.895431 7 0 7.89543 0 9V16C0 17.1046 0.89543 18 2 18H12C13.1046 18 14 17.1046 14 16V9C14 7.89543 13.1046 7 12 7H4V5ZM3 9H2L2 16H12V9H3Z" fill={color}/>

    </svg>
  );
};