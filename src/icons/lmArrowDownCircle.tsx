"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmArrowDownCircle: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM12.7071 10.7071C13.0976 10.3166 13.0976 9.68342 12.7071 9.29289C12.3166 8.90237 11.6834 8.90237 11.2929 9.29289L10 10.5858V5C10 4.44772 9.55229 4 9 4C8.44772 4 8 4.44772 8 5L8 10.5858L6.70711 9.29289C6.31658 8.90237 5.68342 8.90237 5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071L8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L12.7071 10.7071Z" fill={color}/>

    </svg>
  );
};