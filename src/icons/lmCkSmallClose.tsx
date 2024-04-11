"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkSmallClose: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.41 12L15.7 9.71C15.89 9.53 16 9.28 16 9C15.9997 8.80202 15.9408 8.60855 15.8308 8.44396C15.7208 8.27938 15.5645 8.15104 15.3816 8.07512C15.1988 7.9992 14.9975 7.9791 14.8033 8.01734C14.609 8.05557 14.4304 8.15045 14.29 8.29L12 10.59L9.71 8.29C9.5217 8.1017 9.2663 7.99591 9 7.99591C8.7337 7.99591 8.47831 8.1017 8.29 8.29C8.1017 8.47831 7.99591 8.7337 7.99591 9C7.99591 9.2663 8.1017 9.5217 8.29 9.71L10.59 12L8.3 14.29C8.11 14.47 8 14.72 8 15C8.00029 15.198 8.05916 15.3915 8.1692 15.556C8.27925 15.7206 8.43554 15.849 8.61839 15.9249C8.80123 16.0008 9.00246 16.0209 9.19672 15.9827C9.39097 15.9444 9.56957 15.8496 9.71 15.71L12 13.41L14.29 15.7C14.47 15.89 14.72 16 15 16C15.198 15.9997 15.3915 15.9408 15.556 15.8308C15.7206 15.7208 15.849 15.5645 15.9249 15.3816C16.0008 15.1988 16.0209 14.9975 15.9827 14.8033C15.9444 14.609 15.8496 14.4304 15.71 14.29L13.41 12Z" fill={color}/>

    </svg>
  );
};