import React from "react";
import { AssetProps } from "@icons/types/asset.types";

export interface ButtonProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  type?: "fill" | "outlined" | "label";
  iconOne?: React.FC<AssetProps>;
  iconTwo?: React.FC<AssetProps>;
  onClick?: () => void;
  label?: string;
  color?: string;
  bgColor?: string;
}
