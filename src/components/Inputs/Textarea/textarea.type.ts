import React from "react";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  type?: "fill" | "outlined" | "outline-only";
  label?: string;
  errorMessage?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  validations?:((...args: unknown[])=>void)[]
}
