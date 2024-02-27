import React from "react";
import { AssetProps } from "../icons/types/asset.types";

export interface LMAssetProps extends AssetProps {
  Asset: React.FC<AssetProps>;
}

const LMAsset: React.FC<LMAssetProps> = ({ Asset, size, color, ...props }) => {
  return <Asset size={size} color={color} {...props} />;
};

export default LMAsset;
