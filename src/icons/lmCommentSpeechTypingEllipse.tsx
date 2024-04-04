"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCommentSpeechTypingEllipse: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 10.8954 4.10457 10 3 10H2V2H16V10H12.3028C11.7105 10 11.1315 10.1753 10.6387 10.5038L5 14.263V12ZM0 10C0 11.1046 0.895431 12 2 12H3V14V16.1315C3 16.9302 3.89015 17.4066 4.5547 16.9635L11.7481 12.1679C11.9123 12.0584 12.1054 12 12.3028 12H16C17.1046 12 18 11.1046 18 10V2C18 0.895431 17.1046 0 16 0H2C0.895431 0 0 0.895431 0 2V10ZM6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7ZM10 6C10 6.55228 9.55228 7 9 7C8.44771 7 8 6.55228 8 6C8 5.44772 8.44771 5 9 5C9.55228 5 10 5.44772 10 6ZM12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z" fill={color}/>

    </svg>
  );
};