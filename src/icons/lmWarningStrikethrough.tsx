"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmWarningStrikethrough: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C7.42766 16 5.97641 15.4816 4.80783 14.6064L14.6064 4.80783C15.4816 5.97641 16 7.42766 16 9ZM3.39362 13.1922L13.1922 3.39362C12.0236 2.5184 10.5723 2 9 2C5.13401 2 2 5.13401 2 9C2 10.5723 2.5184 12.0236 3.39362 13.1922ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z" fill={color}/>

    </svg>
  );
};