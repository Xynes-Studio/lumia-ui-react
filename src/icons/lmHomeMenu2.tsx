"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmHomeMenu2: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.60604 0.204568C9.24805 -0.0681894 8.75195 -0.0681894 8.39396 0.204568L0.912914 5.90441C0.416418 6.28269 0.125 6.87109 0.125 7.49527V17C0.125 18.212 1.19038 19 2.25 19H6H12H15.75C16.8096 19 17.875 18.212 17.875 17V7.49527C17.875 6.87109 17.5836 6.28269 17.0871 5.90441L9.60604 0.204568ZM13 17H15.75C15.8136 17 15.8551 16.9795 15.875 16.9647V7.49527L9 2.25718L2.125 7.49527L1.51896 6.69984L2.125 7.49527V16.9647C2.14492 16.9795 2.18642 17 2.25 17H5V11C5 10.4477 5.44772 10 6 10H12C12.5523 10 13 10.4477 13 11V17ZM7 17H11V12H7V17Z" fill={color}/>

    </svg>
  );
};