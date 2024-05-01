import { AssetProps } from "@icons/types/asset.types";
import React from "react";

export interface DialougeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    visible: boolean;
    actionBtnType?: 'primary' | 'secondary' | 'both' | 'none';
    contentAlign?: 'left' | 'center' | 'right';
    primaryBtnOnPress?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    secondaryBtnOnPress?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    primaryBtnlabel?: string;
    secondaryBtnlabel?: string;
    primaryIcon?: React.FC<AssetProps>;
    secondaryIcon?: React.FC<AssetProps>;
    title?: string;
    description?: string;
    closeIcon?: boolean;
    onClose?: () => void;
}