import React from "react";

export interface ModalHorizontalInProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    visible?: boolean;
    direction?: 'left' | 'right',
    closeIcon?: boolean;
    onClose?: () => void;
}