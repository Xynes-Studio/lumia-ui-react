"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmSignalStrength2: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55328 6.83533C4.00619 7.25891 3.10352 7.25113 2.75757 6.65193C2.56693 6.32173 2.60082 5.90218 2.87783 5.64018C3.95279 4.62346 5.40358 4 6.99998 4C8.59638 4 10.0472 4.62346 11.1221 5.64018C11.3991 5.90218 11.433 6.32173 11.2424 6.65193C10.8964 7.25113 9.99377 7.25891 9.44669 6.83533C8.77034 6.31166 7.92156 6 6.99998 6C6.07841 6 5.22962 6.31166 4.55328 6.83533ZM13.2337 3.20296C12.9153 3.75433 12.1611 3.85429 11.6429 3.48439C10.3338 2.54983 8.73108 2 6.99998 2C5.26888 2 3.6662 2.54983 2.35705 3.48439C1.83888 3.85429 1.08464 3.75433 0.766308 3.20296C0.534998 2.80232 0.61453 2.28998 0.983867 2.0114C2.65794 0.748683 4.74153 0 6.99998 0C9.25843 0 11.342 0.748683 13.0161 2.0114C13.3854 2.28998 13.465 2.80232 13.2337 3.20296ZM7 12C8.10457 12 9 11.1046 9 10C9 8.89543 8.10457 8 7 8C5.89543 8 5 8.89543 5 10C5 11.1046 5.89543 12 7 12Z" fill={color}/>

    </svg>
  );
};