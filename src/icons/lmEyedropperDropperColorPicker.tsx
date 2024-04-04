"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmEyedropperDropperColorPicker: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.82052 11.9013L9.79721 6.92463L12.6256 9.75306L7.64895 14.7297L3.74572 15.8045L4.82052 11.9013ZM12.9399 0.953555C12.9724 0.921055 13.0066 0.891079 13.0448 0.865635C13.4132 0.62079 15.5396 -0.617251 17.8536 1.69671C20.1675 4.01066 18.9295 6.13709 18.6846 6.50542C18.6592 6.54369 18.6292 6.57791 18.5967 6.61041L15.6005 9.60661L16.7929 10.799C17.1834 11.1895 17.1834 11.8227 16.7929 12.2132C16.4024 12.6037 15.7692 12.6037 15.3787 12.2132L14.1863 11.0208L8.87631 16.3308C8.75384 16.4533 8.60167 16.5418 8.43468 16.5878L3.2665 18.0109C3.17421 18.7509 2.54302 19.3234 1.77811 19.3234C0.949679 19.3234 0.278107 18.6518 0.278107 17.8234C0.278107 17.0821 0.815798 16.4665 1.52243 16.3451L2.96245 11.1156C3.00843 10.9486 3.09699 10.7964 3.21946 10.674L8.52945 5.36397L7.60051 4.43503C7.20999 4.0445 7.20999 3.41134 7.60051 3.02082C7.99103 2.63029 8.6242 2.63029 9.01472 3.02082L9.94366 3.94975L12.9399 0.953555Z" fill={color}/>

    </svg>
  );
};