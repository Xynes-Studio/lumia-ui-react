/* eslint-disable react-hooks/rules-of-hooks */
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
      <path
        d="M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24ZM33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15C28.9706 15 33 19.0294 33 24ZM27.7071 25.7071C28.0976 25.3166 28.0976 24.6834 27.7071 24.2929C27.3166 23.9024 26.6834 23.9024 26.2929 24.2929L25 25.5858V20C25 19.4477 24.5523 19 24 19C23.4477 19 23 19.4477 23 20L23 25.5858L21.7071 24.2929C21.3166 23.9024 20.6834 23.9024 20.2929 24.2929C19.9024 24.6834 19.9024 25.3166 20.2929 25.7071L23.2929 28.7071C23.6834 29.0976 24.3166 29.0976 24.7071 28.7071L27.7071 25.7071Z"
        fill={color}
      />
    </svg>
  );
};
