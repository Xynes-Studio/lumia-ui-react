import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SearchInputProps<T = any>
  extends React.HtmlHTMLAttributes<HTMLInputElement> {
  type?: "default" | "outline" | "shadow";
  resultsStyleType?: "default" | "outline" | "alternative-fill";
  inputType?: "search" | "dropdown";
  searchString?: string;
  label?: string;
  autoSearch?: boolean;
  suggestions?: boolean;
  handleSearch?: (value: string) => void;
  dataset?: T[];
  renderItem?: (item: T, index: number) => React.JSX.Element;
  placeholder?: string;
  onValueChange?: (value: string) => void;
}
