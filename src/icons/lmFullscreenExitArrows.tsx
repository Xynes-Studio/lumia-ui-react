"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmFullscreenExitArrows: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 0C11.5989 0 11.2366 0.23973 11.0797 0.608945C10.9228 0.97816 11.0018 1.40539 11.2803 1.69415L12.0713 2.5145L9.29297 5.2929C8.90245 5.68342 8.90245 6.31659 9.29298 6.70711C9.6835 7.09763 10.3167 7.09763 10.7072 6.7071L13.4599 3.95439L14.2802 4.80507C14.5633 5.09859 14.9962 5.19085 15.3743 5.03823C15.7524 4.88561 16 4.51868 16 4.11091L16 0.999999C16 0.447715 15.5523 1.96634e-06 15 1.96634e-06L12.0001 0ZM3.55545 16C3.95991 16 4.32455 15.7564 4.47933 15.3827C4.63411 15.009 4.54855 14.5789 4.26256 14.2929L3.69195 13.7223L6.70712 10.7071C7.09765 10.3166 7.09765 9.68342 6.70712 9.2929C6.3166 8.90238 5.68344 8.90238 5.29291 9.2929L2.27775 12.3081L1.70711 11.7374C1.42111 11.4514 0.990991 11.3659 0.617314 11.5206C0.243638 11.6754 -3.47504e-06 12.0401 0 12.4445L1.84413e-05 15C2.23188e-05 15.5523 0.447739 16 1.00002 16L3.55545 16Z" fill={color}/>

    </svg>
  );
};