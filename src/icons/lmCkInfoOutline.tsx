"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkInfoOutline: React.FC<AssetProps> = ({
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
    <g clip-path="url(#clip0_28_61028)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM11.959 8C12.5113 8 12.959 7.55228 12.959 7C12.959 6.44772 12.5113 6 11.959 6C11.4067 6 10.959 6.44772 10.959 7C10.959 7.55228 11.4067 8 11.959 8ZM12.959 10V11V17V18H10.959V17V11V10H12.959Z" fill={color}/>
</g>
<defs >
<clipPath id="clip0_28_61028">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>

    </svg>
  );
};