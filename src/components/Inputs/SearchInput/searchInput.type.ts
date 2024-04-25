import React from "react";

interface SearchValueType {
  value: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SearchInputProps<T = any>
  extends React.HtmlHTMLAttributes<HTMLInputElement> {
  type?: "default" | "outline" | "shadow";
  inputType?: "search" | "dropdown";
  searchString?: string;
  label?: string;
  autoSearch?: boolean;
  handleSearch?: ({ value }: SearchValueType) => void;
  dataset?: T[];
  renderItem?: (item: T, index: number) => React.JSX.Element;
  placeholder?: string;
}
