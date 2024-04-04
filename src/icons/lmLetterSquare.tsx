"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmLetterSquare: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 16V2H16V16H2ZM0 0.4C0 0.179086 0.179086 0 0.4 0H17.6C17.8209 0 18 0.179086 18 0.4V17.6C18 17.8209 17.8209 18 17.6 18H0.4C0.179086 18 0 17.8209 0 17.6V0.4ZM12.2871 11.5879H7.98633L12.1934 5.47656V4.46875H5.79492V5.89258H10.0078L5.78906 11.9688V13H12.2871V11.5879Z" fill={color}/>

    </svg>
  );
};