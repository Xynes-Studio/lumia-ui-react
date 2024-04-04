"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmSmileyHappyFace: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM7 7C7.55228 7 8 6.55228 8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6C6 6.55228 6.44772 7 7 7ZM12 6C12 6.55228 11.5523 7 11 7C10.4477 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5C11.5523 5 12 5.44772 12 6ZM5.75 9C5.75 8.58579 5.41421 8.25 5 8.25C4.58579 8.25 4.25 8.58579 4.25 9C4.25 11.6234 6.37665 13.75 9 13.75C11.6234 13.75 13.75 11.6234 13.75 9C13.75 8.58579 13.4142 8.25 13 8.25C12.5858 8.25 12.25 8.58579 12.25 9C12.25 10.7949 10.7949 12.25 9 12.25C7.20507 12.25 5.75 10.7949 5.75 9Z" fill={color}/>

    </svg>
  );
};