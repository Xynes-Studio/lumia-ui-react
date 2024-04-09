/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmInfo: React.FC<AssetProps> = ({
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
      <path
        d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12.25 5C12.5467 5 12.8367 5.08797 13.0834 5.2528C13.33 5.41762 13.5223 5.65189 13.6358 5.92597C13.7494 6.20006 13.7791 6.50166 13.7212 6.79264C13.6633 7.08361 13.5204 7.35088 13.3107 7.56066C13.1009 7.77044 12.8336 7.9133 12.5426 7.97118C12.2517 8.02906 11.9501 7.99935 11.676 7.88582C11.4019 7.77229 11.1676 7.58003 11.0028 7.33336C10.838 7.08668 10.75 6.79667 10.75 6.5C10.75 6.10218 10.908 5.72064 11.1893 5.43934C11.4706 5.15804 11.8522 5 12.25 5ZM14.5 18.5H10.5C10.2348 18.5 9.98044 18.3946 9.7929 18.2071C9.60536 18.0196 9.50001 17.7652 9.50001 17.5C9.50001 17.2348 9.60536 16.9804 9.7929 16.7929C9.98044 16.6054 10.2348 16.5 10.5 16.5H11.25C11.3163 16.5 11.3799 16.4737 11.4268 16.4268C11.4737 16.3799 11.5 16.3163 11.5 16.25V11.75C11.5 11.6837 11.4737 11.6201 11.4268 11.5732C11.3799 11.5263 11.3163 11.5 11.25 11.5H10.5C10.2348 11.5 9.98044 11.3946 9.7929 11.2071C9.60536 11.0196 9.50001 10.7652 9.50001 10.5C9.50001 10.2348 9.60536 9.98043 9.7929 9.79289C9.98044 9.60536 10.2348 9.5 10.5 9.5H11.5C12.0304 9.5 12.5391 9.71071 12.9142 10.0858C13.2893 10.4609 13.5 10.9696 13.5 11.5V16.25C13.5 16.3163 13.5263 16.3799 13.5732 16.4268C13.6201 16.4737 13.6837 16.5 13.75 16.5H14.5C14.7652 16.5 15.0196 16.6054 15.2071 16.7929C15.3946 16.9804 15.5 17.2348 15.5 17.5C15.5 17.7652 15.3946 18.0196 15.2071 18.2071C15.0196 18.3946 14.7652 18.5 14.5 18.5Z"
        fill={color}
      />
    </svg>
  );
};
