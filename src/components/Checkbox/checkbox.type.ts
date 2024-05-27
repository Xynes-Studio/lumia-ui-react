import React from "react";

export interface CheckboxProps
  extends React.HtmlHTMLAttributes<HTMLInputElement> {
  label?: string;
  showIndeterminate?: boolean;
  isChecked?: boolean;
  onChange?:  (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: boolean;
  disabled?:boolean;
}
