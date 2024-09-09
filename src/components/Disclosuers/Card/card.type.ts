import React from "react";

export interface CardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  type?: "default" | "fill" | "outlined";
  image?: string;
  title: string;
  description: string;
  displaySwitch?: boolean;
  toggleValue?: boolean;
  onToggle?: (value: boolean) => void;
  actionElement?: React.ReactNode;
  width?: string;
}
