"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmWindowsKeyLogo: React.FC<AssetProps> = ({
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
    <path d="M6.76959 1.74208L0.669589 2.68054C0.572022 2.69555 0.5 2.7795 0.5 2.87821V7.8C0.5 7.91046 0.589543 8 0.7 8H6.8C6.91046 8 7 7.91046 7 7.8V1.93975C7 1.81717 6.89074 1.72344 6.76959 1.74208Z" fill={color}/>
<path d="M8 7.8V1.66599C8 1.56974 8.06855 1.48715 8.16314 1.46941L15.7631 0.0444108C15.8862 0.0213328 16 0.115758 16 0.240985V7.8C16 7.91046 15.9105 8 15.8 8H8.2C8.08954 8 8 7.91046 8 7.8Z" fill={color}/>
<path d="M0.5 13.9863V9.2C0.5 9.08954 0.589543 9 0.7 9H6.8C6.91046 9 7 9.08954 7 9.2V14.9248C7 15.0474 6.89074 15.1411 6.76959 15.1225L0.669589 14.184C0.572022 14.169 0.5 14.085 0.5 13.9863Z" fill={color}/>
<path d="M8 15.3234V9.2C8 9.08954 8.08954 9 8.2 9H15.8C15.9105 9 16 9.08954 16 9.2V16.2734C16 16.3937 15.8946 16.4868 15.7752 16.4719L8.17519 15.5219C8.07511 15.5094 8 15.4243 8 15.3234Z" fill={color}/>

    </svg>
  );
};