"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmLogOut: React.FC<AssetProps> = ({
  size = 1,
  color = globalColors.foreground,
  ...props
}) => {
  const [width, height] = useIconSize(21, 22, size);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 21 22`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <path d="M15.4998 4.84355L20.5365 9.88027C20.8318 10.1756 21 10.5816 21 11C21 11.4184 20.8318 11.8244 20.5365 12.1197L15.4998 17.1564C15.2373 17.4189 14.8846 17.5625 14.5154 17.5625C13.7484 17.5625 13.125 16.9391 13.125 16.1721V13.625H7.875C7.14902 13.625 6.5625 13.0385 6.5625 12.3125V9.6875C6.5625 8.96152 7.14902 8.375 7.875 8.375H13.125V5.82793C13.125 5.06094 13.7484 4.4375 14.5154 4.4375C14.8846 4.4375 15.2373 4.58516 15.4998 4.84355ZM6.5625 4.4375H3.9375C3.21152 4.4375 2.625 5.02402 2.625 5.75V16.25C2.625 16.976 3.21152 17.5625 3.9375 17.5625H6.5625C7.28848 17.5625 7.875 18.149 7.875 18.875C7.875 19.601 7.28848 20.1875 6.5625 20.1875H3.9375C1.76367 20.1875 0 18.4238 0 16.25V5.75C0 3.57617 1.76367 1.8125 3.9375 1.8125H6.5625C7.28848 1.8125 7.875 2.39902 7.875 3.125C7.875 3.85098 7.28848 4.4375 6.5625 4.4375Z" fill={color}/>

    </svg>
  );
};