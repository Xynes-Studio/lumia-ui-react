import React from "react";

export interface SwitchProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  label?: string;
  activeColor?: string;
  inactiveColor?: string;
  value: boolean;
  onToggle?: (value: boolean) => void;
}
