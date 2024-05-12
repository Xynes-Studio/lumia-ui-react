import React from "react";

export interface TextInputProps
  extends React.HtmlHTMLAttributes<HTMLInputElement> {
  type?: "fill" | "outlined" | "outline-only";
  inputType?: "text" | "number" | "password" | "email";
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  validations?:((...args: unknown[])=>void)[]
}
