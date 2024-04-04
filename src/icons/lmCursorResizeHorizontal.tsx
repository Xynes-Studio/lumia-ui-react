"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCursorResizeHorizontal: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 6L1 4L3.5 2L3.5 3.5H9H14.5V2L17 4L14.5 6V4.5H9H3.5V6Z" fill={color}/>
<path d="M1 4L0.687652 3.60957L0.19961 4L0.687652 4.39043L1 4ZM3.5 6L3.18765 6.39043L4 7.04031V6H3.5ZM3.5 2L4 2L4 0.959688L3.18765 1.60957L3.5 2ZM3.5 3.5L3 3.5V4H3.5V3.5ZM14.5 3.5V4H15V3.5H14.5ZM14.5 2L14.8123 1.60957L14 0.959688V2H14.5ZM17 4L17.3123 4.39043L17.8004 4L17.3123 3.60957L17 4ZM14.5 6H14V7.04031L14.8123 6.39043L14.5 6ZM14.5 4.5H15V4H14.5V4.5ZM3.5 4.5V4H3V4.5H3.5ZM0.687652 4.39043L3.18765 6.39043L3.81235 5.60957L1.31235 3.60957L0.687652 4.39043ZM3.18765 1.60957L0.687652 3.60957L1.31235 4.39043L3.81235 2.39043L3.18765 1.60957ZM4 3.5L4 2L3 2L3 3.5L4 3.5ZM3.5 4H9V3H3.5V4ZM9 4H14.5V3H9V4ZM15 3.5V2H14V3.5H15ZM14.1877 2.39043L16.6877 4.39043L17.3123 3.60957L14.8123 1.60957L14.1877 2.39043ZM16.6877 3.60957L14.1877 5.60957L14.8123 6.39043L17.3123 4.39043L16.6877 3.60957ZM15 6V4.5H14V6H15ZM14.5 4H9V5H14.5V4ZM9 4H3.5V5H9V4ZM4 6V4.5H3V6H4Z" fill={color}/>

    </svg>
  );
};