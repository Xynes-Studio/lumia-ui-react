import React from "react";

export interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  type?: "default" | "fill" | "outlined";
  image?: string;
  title?: string;
  description?: string;
  displaySwitch?: boolean;
  onToggle?: (isChecked: boolean) => void;
  actionElement?: React.ReactNode;
  width?: string;
  height?: string;
}
