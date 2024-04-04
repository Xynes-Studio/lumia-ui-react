"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmShoppingCart: React.FC<AssetProps> = ({
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H3.21014L5.37659 11.0991C4.57728 11.361 4 12.1131 4 13C4 14.1046 4.89543 15 6 15C7.10457 15 8 14.1046 8 13C8 12.8274 7.97812 12.6598 7.93699 12.5H15.063C15.0219 12.6598 15 12.8274 15 13C15 14.1046 15.8954 15 17 15C18.1046 15 19 14.1046 19 13C19 12.2468 18.5836 11.5908 17.9684 11.2497C17.8573 10.8185 17.4658 10.5 17 10.5H7.28986L4.97281 0.768379C4.86555 0.317911 4.46306 0 4 0H1ZM8.27296 2C7.62484 2 7.14794 2.60707 7.3014 3.23677L8.51989 8.23677C8.62906 8.68474 9.03037 9 9.49145 9H16.5085C16.9696 9 17.3709 8.68474 17.4801 8.23677L18.6986 3.23677C18.8521 2.60708 18.3752 2 17.727 2H8.27296Z" fill={color}/>

    </svg>
  );
};