import React from "react";

// Define specific prop types for each badge type
interface RoundBadgeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  type: "round";
  label: number; // Only number is valid when type is 'round'
  color?: string;
  backgroundColor?: string;
}

interface SquareFillBadgeProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  type: "square-fill";
  label: string; // String labels for other types
  color?: string;
  backgroundColor?: string;
}

interface SquareOutlinedBadgeProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  type: "square-outlined";
  label: string; // String labels for other types
  color?: string;
  backgroundColor?: string;
}

// Union type combining all badge types
export type BadgeProps =
  | RoundBadgeProps
  | SquareFillBadgeProps
  | SquareOutlinedBadgeProps;
