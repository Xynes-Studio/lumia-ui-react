"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmEnterEntrance: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C5.44772 0 5 0.447715 5 1V4C5 4.55228 5.44772 5 6 5C6.55228 5 7 4.55228 7 4V2H16V16H7V14C7 13.4477 6.55228 13 6 13C5.44772 13 5 13.4477 5 14V17C5 17.5523 5.44772 18 6 18H17C17.5523 18 18 17.5523 18 17V1C18 0.447715 17.5523 0 17 0H6ZM10.7071 5.29289C10.3166 4.90237 9.68342 4.90237 9.29289 5.29289C8.90237 5.68342 8.90237 6.31658 9.29289 6.70711L10.5858 8H1C0.447715 8 0 8.44772 0 9C0 9.55228 0.447715 10 1 10H10.5858L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071C9.68342 13.0976 10.3166 13.0976 10.7071 12.7071L13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289L10.7071 5.29289Z" fill={color}/>

    </svg>
  );
};