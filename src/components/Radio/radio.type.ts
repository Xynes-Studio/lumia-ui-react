import React from "react";

export interface RadioProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  checked?: boolean;
}
