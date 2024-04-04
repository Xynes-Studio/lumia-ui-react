"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmVolumeLowerVolumeDown: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9V5C0 4.44771 0.447715 4 1 4H3.58579C3.851 4 4.10536 3.89464 4.29289 3.7071L7.29289 0.707107C7.92286 0.0771422 9 0.523307 9 1.41421V12.5858C9 13.4767 7.92286 13.9229 7.29289 13.2929L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1C0.447715 10 0 9.55228 0 9ZM11.0357 4.05818C10.6131 3.48615 10.7284 2.57102 11.3846 2.2968C11.7263 2.15401 12.1246 2.22844 12.3635 2.51143C13.3986 3.73799 14.0186 5.29961 14.0186 7C14.0186 8.76558 13.3502 10.3815 12.2426 11.6281C12.0001 11.9011 11.6066 11.9672 11.2715 11.8222C10.6154 11.5382 10.5168 10.611 10.9561 10.0468C11.6279 9.18389 12.0186 8.12332 12.0186 7C12.0186 5.92183 11.6587 4.90147 11.0357 4.05818Z" fill={color}/>

    </svg>
  );
};