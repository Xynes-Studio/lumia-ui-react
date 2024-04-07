"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmGlobeGlobalPlanetWorldEarth: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1004 10.5053C4.03427 10.0143 4 9.5116 4 9C4 8.48215 4.03512 7.97346 4.10284 7.47673H2.16621C2.05739 7.96711 2 8.47685 2 9C2 9.51675 2.05599 10.0204 2.16225 10.5053H4.1004ZM4.56326 12.5053H2.93953C3.65098 13.7327 4.72458 14.724 6.01415 15.3331C5.40153 14.4925 4.90829 13.5391 4.56326 12.5053ZM6.74253 12.5053L11.2575 12.5053C10.732 13.6714 9.95246 14.6704 9 15.4118C8.04754 14.6704 7.26803 13.6714 6.74253 12.5053ZM11.8702 10.5053L6.12983 10.5053C6.04464 10.0182 6 9.51492 6 9C6 8.47874 6.04575 7.96941 6.133 7.47673L11.867 7.47673C11.9543 7.96941 12 8.47874 12 9C12 9.51492 11.9554 10.0182 11.8702 10.5053ZM13.4367 12.5053C13.0917 13.5391 12.5985 14.4924 11.9859 15.3331C13.2754 14.724 14.349 13.7327 15.0605 12.5053H13.4367ZM15.8378 10.5053H13.8996C13.9657 10.0143 14 9.5116 14 9C14 8.48215 13.9649 7.97346 13.8972 7.47673H15.8338C15.9426 7.96711 16 8.47685 16 9C16 9.51675 15.944 10.0204 15.8378 10.5053ZM9 2.58821C8.05244 3.32582 7.27606 4.31835 6.75066 5.47673L11.2493 5.47673C10.7239 4.31835 9.94756 3.32582 9 2.58821ZM13.4307 5.47673H15.05C14.3385 4.25763 13.2691 3.27301 11.9859 2.66693C12.5949 3.50267 13.086 4.44981 13.4307 5.47673ZM2.95 5.47673H4.56928C4.91402 4.44981 5.40508 3.50267 6.01415 2.66693C4.73089 3.27301 3.66148 4.25763 2.95 5.47673ZM9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0Z" fill={color}/>

    </svg>
  );
};