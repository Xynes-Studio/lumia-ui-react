"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmExclamationInCircleWarning: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM10 5C10 4.44772 9.55229 4 9 4C8.44771 4 8 4.44772 8 5V9C8 9.55228 8.44771 10 9 10C9.55229 10 10 9.55228 10 9V5ZM10 12C10 11.4477 9.55229 11 9 11C8.44771 11 8 11.4477 8 12V12.5C8 13.0523 8.44771 13.5 9 13.5C9.55229 13.5 10 13.0523 10 12.5V12Z" fill={color}/>

    </svg>
  );
};