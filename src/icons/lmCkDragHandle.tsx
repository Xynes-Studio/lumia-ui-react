"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkDragHandle: React.FC<AssetProps> = ({
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
    <path d="M7.2 4.8C5.87452 4.8 4.8 3.72548 4.8 2.4C4.8 1.07452 5.87452 0 7.2 0C8.52549 0 9.6 1.07452 9.6 2.4C9.6 3.72548 8.52549 4.8 7.2 4.8ZM7.2 14.4C5.87452 14.4 4.8 13.3255 4.8 12C4.8 10.6745 5.87452 9.6 7.2 9.6C8.52549 9.6 9.6 10.6745 9.6 12C9.6 13.3255 8.52549 14.4 7.2 14.4ZM7.2 24C5.87452 24 4.8 22.9255 4.8 21.6C4.8 20.2745 5.87452 19.2 7.2 19.2C8.52549 19.2 9.6 20.2745 9.6 21.6C9.6 22.9255 8.52549 24 7.2 24ZM16.8 4.8C15.4745 4.8 14.4 3.72548 14.4 2.4C14.4 1.07452 15.4745 0 16.8 0C18.1255 0 19.2 1.07452 19.2 2.4C19.2 3.72548 18.1255 4.8 16.8 4.8ZM16.8 14.4C15.4745 14.4 14.4 13.3255 14.4 12C14.4 10.6745 15.4745 9.6 16.8 9.6C18.1255 9.6 19.2 10.6745 19.2 12C19.2 13.3255 18.1255 14.4 16.8 14.4ZM16.8 24C15.4745 24 14.4 22.9255 14.4 21.6C14.4 20.2745 15.4745 19.2 16.8 19.2C18.1255 19.2 19.2 20.2745 19.2 21.6C19.2 22.9255 18.1255 24 16.8 24Z" fill={color}/>

    </svg>
  );
};