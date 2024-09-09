"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkQuestionOutline: React.FC<AssetProps> = ({
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
    <g clip-path="url(#clip0_28_61064)">
<path d="M9 9C9.00011 8.45003 9.15139 7.91067 9.43732 7.44087C9.72325 6.97107 10.1328 6.58891 10.6213 6.33615C11.1097 6.0834 11.6583 5.96978 12.2069 6.00772C12.7556 6.04565 13.2833 6.23368 13.7323 6.55125C14.1813 6.86882 14.5344 7.30371 14.7529 7.80839C14.9715 8.31307 15.0471 8.86812 14.9715 9.41287C14.8959 9.95762 14.6721 10.4711 14.3244 10.8972C13.9767 11.3233 13.5185 11.6457 13 11.829C12.7074 11.9324 12.4541 12.1241 12.275 12.3775C12.0959 12.6309 11.9998 12.9337 12 13.244V14.25M12 17.25C11.9258 17.25 11.8533 17.272 11.7917 17.3132C11.73 17.3544 11.6819 17.413 11.6535 17.4815C11.6252 17.55 11.6177 17.6254 11.6322 17.6982C11.6467 17.7709 11.6824 17.8377 11.7348 17.8902C11.7873 17.9426 11.8541 17.9783 11.9268 17.9928C11.9996 18.0073 12.075 17.9998 12.1435 17.9715C12.212 17.9431 12.2706 17.895 12.3118 17.8333C12.353 17.7717 12.375 17.6992 12.375 17.625C12.375 17.5255 12.3355 17.4302 12.2652 17.3598C12.1948 17.2895 12.0995 17.25 12 17.25ZM23.25 12C23.25 18.2132 18.2132 23.25 12 23.25C5.7868 23.25 0.75 18.2132 0.75 12C0.75 5.7868 5.7868 0.75 12 0.75C18.2132 0.75 23.25 5.7868 23.25 12Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</g>
<defs >
<clipPath id="clip0_28_61064">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>

    </svg>
  );
};