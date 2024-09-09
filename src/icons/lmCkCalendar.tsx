"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkCalendar: React.FC<AssetProps> = ({
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
    <g clip-path="url(#clip0_28_60986)">
<path d="M18.6667 9.42857H5.33333V12.0952H18.6667V9.42857ZM21.3333 1.80953H20.0001V0H17.3333V1.80953H6.66667V0H3.99999V1.80953H2.66667C1.18667 1.80953 0.0133333 3.00953 0.0133333 4.47619L0 21.4286C0 22.8953 1.18667 24 2.66667 24H21.3333C22.8 24 24 22.8953 24 21.4286V4.47619C24 3.00953 22.8 1.80953 21.3333 1.80953ZM21.3333 21.4286H2.66667V6.7619H21.3333V21.4286ZM14.6667 14.7619H5.33333V17.4286H14.6667V14.7619Z" fill={color}/>
</g>
<defs >
<clipPath id="clip0_28_60986">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>

    </svg>
  );
};