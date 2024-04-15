import React from "react";
// import { AssetProps } from "@icons/types/asset.types";

export interface TextInputProps
  extends React.HtmlHTMLAttributes<HTMLInputElement> {
  type?: "fill" | "outlined" | "outline-only" | "-M";
  inputType?: "text" | "number" | "password" | "email";
  label?: string;
  errorMessage?: string;
  placeholder?: string;
}
