import { AssetProps } from "@icons/types/asset.types";
import React from "react";

export interface DialogueProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    visible?: boolean;
    actionBtnType?: 'primary' | 'secondary' | 'both' | 'none';
    contentAlign?: 'left' | 'center' | 'right';
    primaryBtnOnPress?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    secondaryBtnOnPress?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    primaryBtnLabel?: string;
    secondaryBtnLabel?: string;
    primaryIcon?: React.FC<AssetProps>;
    secondaryIcon?: React.FC<AssetProps>;
    title?: string;
    description?: string;
    closeIcon?: boolean;
    onClose?: () => void;
}