import React from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DataTableProps<T = any>
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  dataset: T[];
  renderItem?: (item: T, index: number) => React.JSX.Element;
  headerLabels?: string[];
  pagination?: boolean;
  paginationType?: "infinite-loading" | "default";
  onClickRow?: (label: string, index: number) => void;
  numberOfRows?: number;
  rowStyleTypes?: "transparent" | "outline" | "alternative-fill";
}
