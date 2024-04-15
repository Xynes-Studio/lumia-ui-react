import { AssetProps } from "@icons/types/asset.types";
import React from "react";

export interface ImageProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  title?: string;
  numberOfLinesForTitle?: number;
  description?: string;
  numberOfLinesForDescription?: number;
  overlay?: boolean;
  overlayOpacity?: number;
  source: string;
  icon?: React.FC<AssetProps>;
  aspectRatio?: number;
  canUpdate?: boolean;
  updateUI?: "overlay" | "pen";
  onUpdate?: (url: string, file: Blob) => void;
  accepted?: string;
  fit?: "contain" | "cover" | "fill" | "scale-down" | "none";
  borderRadius?: number;
}
