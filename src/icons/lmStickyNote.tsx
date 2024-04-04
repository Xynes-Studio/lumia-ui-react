"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmStickyNote: React.FC<AssetProps> = ({
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
    <g filter="url(#filter0_d_1_220)">
<path d="M16.1742 14H6C5.44771 14 5 13.5523 5 13V2C5 1.44772 5.44772 1 6 1H18C18.5523 1 19 1.44772 19 2V11M16.1742 14V12C16.1742 11.4477 16.622 11 17.1742 11H19M16.1742 14L19 11" stroke={color} stroke-width="2" stroke-linejoin="round" shape-rendering="crispEdges"/>
</g>
<defs >
<filter id="filter0_d_1_220" x="0" y="0" width="24" height="23" filter-units="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur std-deviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_220"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_220" result="shape"/>
</filter>
</defs>

    </svg>
  );
};