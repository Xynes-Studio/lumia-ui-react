import React from "react";
import { AssetProps } from "@icons/types/asset.types";

export interface TabsProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  direction?: "horizontal" | "vertical";
  selectType?: "select-100" | "select-200" | "select-300";
  label?: string;
  icon?: React.FC<AssetProps>;
  selected?: boolean;
  color?: string;
  iconSize?: number;
  disabled?: boolean;
  onClick?:  () => void;
}
