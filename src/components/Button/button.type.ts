import React from "react";
import { AssetProps } from "@icons/types/asset.types";

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  type?: "fill" | "outlined" | "label";
  textCase?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";
  icon?: React.FC<AssetProps>;
  iconAtEnd?: boolean;
  label?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  iconSize?: number;
}
