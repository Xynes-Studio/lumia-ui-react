import React from "react";
export interface BadgeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  type: "round" | "square-fill" | "square-outlined";
  label: number; // Only number is valid when type is 'round'
  color?: string;
  backgroundColor?: string;
}
