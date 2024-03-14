import React from "react";
import { AssetProps } from "../icons/types/asset.types";

export interface LMAssetProps extends AssetProps {
  Asset: React.FC<AssetProps>;
  visible?: boolean;
}

export const LMAsset: React.FC<LMAssetProps> = ({
  Asset,
  size,
  color,
  visible = true,
  ...props
}) => {
  if (visible) {
    return <Asset size={size} color={color} {...props} />;
  }
};
