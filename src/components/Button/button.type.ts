import React from "react";
import { AssetProps } from "@icons/types/asset.types";

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  type?: "fill" | "outlined" | "label";
  icon?: React.FC<AssetProps>;
  iconAtEnd?: boolean;
  onClick?: () => void;
  label?: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  borderRadius?: string;
}
