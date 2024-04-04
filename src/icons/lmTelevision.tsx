"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmTelevision: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.78935 0.88606C4.45028 0.450112 3.82201 0.371578 3.38606 0.710648C2.95011 1.04972 2.87158 1.67799 3.21065 2.11394L5.45536 5H2C0.895431 5 0 5.89543 0 7V17C0 18.1046 0.89543 19 2 19H16C17.1046 19 18 18.1046 18 17V7C18 5.89543 17.1046 5 16 5H12.2198L12.4806 3.69612C12.5889 3.15456 12.2377 2.62773 11.6961 2.51942C11.1546 2.41111 10.6277 2.76232 10.5194 3.30388L10.1802 5H7.98908L4.78935 0.88606ZM7.49109 7C7.49749 7.00006 7.5039 7.00006 7.51031 7H10.9815C10.9946 7.00026 11.0076 7.00026 11.0207 7H16V17H2L2 7H7.49109Z" fill={color}/>

    </svg>
  );
};