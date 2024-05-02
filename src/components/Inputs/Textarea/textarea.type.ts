import React from "react";

export interface TextAreaProps
  extends React.HtmlHTMLAttributes<HTMLTextAreaElement> {
  type?: "fill" | "outlined" | "outline-only";
  label?: string;
  errorMessage?: string;
  placeholder?: string;
}
