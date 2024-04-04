"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmWarningTriangleCaution: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C9.36931 0 9.70856 0.203548 9.88235 0.529412L17.8824 15.5294C18.0477 15.8393 18.0382 16.2133 17.8575 16.5145C17.6768 16.8157 17.3513 17 17 17H1C0.648737 17 0.323231 16.8157 0.142507 16.5145C-0.0382159 16.2133 -0.0476527 15.8393 0.117647 15.5294L8.11765 0.529412C8.29144 0.203548 8.63069 0 9 0ZM15.3333 15L9 3.125L2.66667 15H15.3333ZM9 6.5625C9.55229 6.5625 10 7.01022 10 7.5625V9.90625C10 10.4585 9.55229 10.9062 9 10.9062C8.44771 10.9062 8 10.4585 8 9.90625V7.5625C8 7.01022 8.44771 6.5625 9 6.5625ZM9 13.5C9.55228 13.5 10 13.0523 10 12.5C10 11.9477 9.55228 11.5 9 11.5C8.44771 11.5 8 11.9477 8 12.5C8 13.0523 8.44771 13.5 9 13.5Z" fill={color}/>

    </svg>
  );
};