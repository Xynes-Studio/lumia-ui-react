"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmDiamondComponentInstanceFigmaShape: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.82843 9L9 15.1716L15.1716 9L9 2.82843L2.82843 9ZM0.5 8.5C0.223858 8.77614 0.223858 9.22386 0.500001 9.5L8.5 17.5C8.77614 17.7761 9.22386 17.7761 9.5 17.5L17.5 9.5C17.7761 9.22386 17.7761 8.77614 17.5 8.5L9.5 0.500001C9.22386 0.223859 8.77614 0.22386 8.5 0.500002L0.5 8.5Z" fill={color}/>

    </svg>
  );
};