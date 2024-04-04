"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCursorResizeVertical: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.5L4 1L6 3.5H4.5V9V14.5H6L4 17L2 14.5H3.5V9V3.5H2Z" fill={color}/>
<path d="M4 1L4.39043 0.687652L4 0.199609L3.60957 0.687652L4 1ZM2 3.5L1.60957 3.18765L0.959688 4H2V3.5ZM6 3.5V4H7.04031L6.39043 3.18765L6 3.5ZM4.5 3.5V3H4V3.5H4.5ZM4.5 14.5H4V15H4.5V14.5ZM6 14.5L6.39043 14.8123L7.04031 14H6V14.5ZM4 17L3.60957 17.3123L4 17.8004L4.39043 17.3123L4 17ZM2 14.5V14H0.959688L1.60957 14.8123L2 14.5ZM3.5 14.5V15H4V14.5H3.5ZM3.5 3.5H4V3H3.5V3.5ZM3.60957 0.687652L1.60957 3.18765L2.39043 3.81235L4.39043 1.31235L3.60957 0.687652ZM6.39043 3.18765L4.39043 0.687652L3.60957 1.31235L5.60957 3.81235L6.39043 3.18765ZM4.5 4H6V3H4.5V4ZM4 3.5V9H5V3.5H4ZM4 9V14.5H5V9H4ZM4.5 15H6V14H4.5V15ZM5.60957 14.1877L3.60957 16.6877L4.39043 17.3123L6.39043 14.8123L5.60957 14.1877ZM4.39043 16.6877L2.39043 14.1877L1.60957 14.8123L3.60957 17.3123L4.39043 16.6877ZM2 15H3.5V14H2V15ZM4 14.5V9H3V14.5H4ZM4 9V3.5H3V9H4ZM2 4H3.5V3H2V4Z" fill={color}/>

    </svg>
  );
};