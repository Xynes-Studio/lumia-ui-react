import { AssetProps } from "@icons/types/asset.types";
import React from "react";

export interface ImageProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  title?: string;
  description?: string;
  overlay: false;
  source: string;
  icon?: AssetProps;
  aspectRatio?:  number;
  canUpdate: boolean;
  accepted?: string;
}