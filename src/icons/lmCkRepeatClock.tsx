"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmCkRepeatClock: React.FC<AssetProps> = ({
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
    <path d="M12.965 6C12.6998 6 12.4454 6.10536 12.2579 6.2929C12.0704 6.48043 11.965 6.73479 11.965 7V12.5C11.965 12.7652 12.0704 13.0196 12.2579 13.2071C12.4454 13.3946 12.6998 13.5 12.965 13.5H17.965C18.2302 13.5 18.4846 13.3946 18.6721 13.2071C18.8596 13.0196 18.965 12.7652 18.965 12.5C18.965 12.2348 18.8596 11.9804 18.6721 11.7929C18.4846 11.6054 18.2302 11.5 17.965 11.5H14.215C14.1487 11.5 14.0851 11.4737 14.0382 11.4268C13.9913 11.3799 13.965 11.3163 13.965 11.25V7C13.965 6.73479 13.8596 6.48043 13.6721 6.2929C13.4846 6.10536 13.2302 6 12.965 6Z" fill={color}/>
<path d="M12.567 1.258C10.4159 1.34378 8.33932 2.06916 6.60269 3.34139C4.86607 4.61363 3.54834 6.3749 2.818 8.4C2.79854 8.45424 2.76093 8.50009 2.71155 8.5298C2.66217 8.5595 2.60404 8.57123 2.547 8.563L0.858001 8.309C0.765439 8.29713 0.671393 8.31069 0.58595 8.34821C0.500507 8.38574 0.426892 8.44582 0.373001 8.522C0.320143 8.59948 0.290143 8.69027 0.28643 8.78399C0.282716 8.87771 0.305439 8.97058 0.352001 9.052L3.031 13.752C3.06906 13.8186 3.12192 13.8755 3.18549 13.9184C3.24906 13.9612 3.32164 13.9889 3.39762 13.9993C3.4736 14.0096 3.55094 14.0023 3.62366 13.978C3.69638 13.9537 3.76253 13.913 3.817 13.859L7.587 10.113C7.65301 10.0476 7.69952 9.9652 7.72129 9.87489C7.74307 9.78459 7.73926 9.69001 7.71029 9.60175C7.68132 9.51349 7.62834 9.43504 7.55728 9.37521C7.48622 9.31538 7.3999 9.27652 7.308 9.263L5.593 9.007C5.5547 9.00143 5.51822 8.98705 5.48643 8.96498C5.45464 8.94292 5.4284 8.91377 5.40979 8.87984C5.39118 8.84591 5.3807 8.80813 5.37917 8.76946C5.37765 8.73079 5.38512 8.69229 5.401 8.657C5.99665 7.30842 6.94242 6.14385 8.14013 5.28421C9.33783 4.42457 10.7438 3.9012 12.2121 3.76843C13.6804 3.63565 15.1574 3.89832 16.4899 4.52916C17.8224 5.16 18.9617 6.13602 19.7896 7.35588C20.6176 8.57574 21.1038 9.99497 21.198 11.4662C21.2922 12.9375 20.9909 14.4071 20.3253 15.7226C19.6597 17.0381 18.6541 18.1514 17.4129 18.947C16.1717 19.7426 14.7402 20.1915 13.267 20.247C12.9355 20.253 12.6199 20.3904 12.3897 20.629C12.1595 20.8677 12.0335 21.188 12.0395 21.5195C12.0455 21.851 12.1829 22.1666 12.4215 22.3968C12.6602 22.627 12.9805 22.753 13.312 22.747H13.359C14.7758 22.7035 16.1699 22.3803 17.4613 21.796C18.7527 21.2117 19.9157 20.3778 20.8836 19.3422C21.8515 18.3067 22.605 17.09 23.1009 15.7622C23.5968 14.4343 23.8251 13.0215 23.7729 11.6051C23.7207 10.1886 23.3889 8.79645 22.7967 7.5087C22.2044 6.22096 21.3633 5.06304 20.3218 4.10158C19.2804 3.14012 18.0591 2.39409 16.7282 1.90642C15.3973 1.41875 13.9831 1.19906 12.567 1.26V1.258Z" fill={color}/>

    </svg>
  );
};