import React from "react";
import { AssetProps } from "../../icons/types/asset.types";

export interface AlertProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  type?: "flat" | "outlined" | "default";
  status?: "success" | "warning" | "error";
  showIcon?: boolean;
  icon?: React.FC<AssetProps>;
  showCloseIcon?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  actionBtn?: boolean;
  actionBtnLabel?: string;
  actionBtnOnPress?: () => void;
}
