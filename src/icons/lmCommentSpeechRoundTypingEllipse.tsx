"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCommentSpeechRoundTypingEllipse: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 11.1822 4.5021 10.4468 3.74278 10.143C3.74391 10.1435 3.7432 10.1431 3.74076 10.1419C3.72189 10.1324 3.5992 10.0709 3.41023 9.92337C3.21083 9.76774 2.98205 9.55062 2.76833 9.27486C2.34911 8.73393 2 7.98804 2 7C2 4.67722 4.63712 2 9 2C11.1517 2 12.9581 2.57915 14.1726 3.47981C15.3437 4.34821 16 5.52543 16 7C16 8.34738 15.4402 9.38862 14.425 10.15C13.3586 10.9498 11.691 11.5 9.5 11.5C9.09319 11.5 8.69606 11.6241 8.36158 11.8556L5 14.1829V12ZM4.94904 16.6507L5 16.6154L9.5 13.5C14.5 13.5 18 11 18 7C18 2.66223 13.9706 0 9 0C4.02944 0 0 3.13401 0 7C0 10 2.16667 11.6667 3 12V15.5675V15.6295V16.3235V17.0457C3 17.449 3.45299 17.6864 3.78461 17.4568L4.37841 17.0457L4.94904 16.6507ZM6 8C6.55228 8 7 7.55228 7 7C7 6.44772 6.55228 6 6 6C5.44772 6 5 6.44772 5 7C5 7.55228 5.44772 8 6 8ZM10 7C10 7.55228 9.55228 8 9 8C8.44771 8 8 7.55228 8 7C8 6.44772 8.44771 6 9 6C9.55228 6 10 6.44772 10 7ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" fill={color}/>

    </svg>
  );
};