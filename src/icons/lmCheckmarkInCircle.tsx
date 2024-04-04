"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCheckmarkInCircle: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM13.2474 7.16436C13.6143 6.75158 13.5771 6.11951 13.1644 5.75259C12.7516 5.38567 12.1195 5.42285 11.7526 5.83564L8.38334 9.62605L6.62469 8.21913C6.19343 7.87412 5.56414 7.94404 5.21913 8.37531C4.87412 8.80657 4.94404 9.43586 5.37531 9.78087L7.87531 11.7809C8.29082 12.1133 8.89389 12.0621 9.24741 11.6644L13.2474 7.16436Z" fill={color}/>

    </svg>
  );
};