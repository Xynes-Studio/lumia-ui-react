import React from "react";
import { AssetProps } from "@icons/types/asset.types";

export interface ProfileProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  actionIcon?: React.FC<AssetProps>;
  avatar?: string;
}
