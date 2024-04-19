import React from "react";

export interface RowProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  styleType?: "transparent" | "border" | "alternative-fill";
  weight?: number[];
  index?: number;
}
