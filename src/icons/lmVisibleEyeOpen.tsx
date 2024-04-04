"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmVisibleEyeOpen: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.79532 8.25603C3.73281 7.46285 2.85592 6.58003 2.32434 6C2.85592 5.41997 3.73281 4.53715 4.79532 3.74397C6.13186 2.74623 7.61732 2 9 2C10.3827 2 11.8681 2.74623 13.2047 3.74397C14.2672 4.53715 15.1441 5.41997 15.6757 6C15.1441 6.58003 14.2672 7.46285 13.2047 8.25603C11.8681 9.25377 10.3827 10 9 10C7.61732 10 6.13186 9.25377 4.79532 8.25603ZM9 0C6.96407 0 5.04591 1.06108 3.5989 2.1413C2.12625 3.24065 0.991137 4.47419 0.498794 5.04227C0.0205028 5.59414 0.0205028 6.40586 0.498794 6.95773C0.991137 7.52581 2.12625 8.75935 3.5989 9.8587C5.04591 10.9389 6.96407 12 9 12C11.0359 12 12.9541 10.9389 14.4011 9.8587C15.8737 8.75935 17.0089 7.52581 17.5012 6.95773C17.9795 6.40586 17.9795 5.59414 17.5012 5.04227C17.0089 4.47419 15.8737 3.24065 14.4011 2.1413C12.9541 1.06108 11.0359 0 9 0ZM9 8C10.1046 8 11 7.10457 11 6C11 4.89543 10.1046 4 9 4C7.89543 4 7 4.89543 7 6C7 7.10457 7.89543 8 9 8Z" fill={color}/>

    </svg>
  );
};