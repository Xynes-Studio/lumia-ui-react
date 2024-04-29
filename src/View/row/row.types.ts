import React from "react";

export interface RowProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  styleType?: "transparent" | "outline" | "alternative-fill";
  weight?: number[];
  index?: number;
}
