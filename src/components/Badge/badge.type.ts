import React from "react";

// Define a base type for common props
interface CommonBadgeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  color?: string;
  backgroundColor?: string;
}

// Define separate types for each badge type
interface RoundBadgeProps extends CommonBadgeProps {
  type: "round";
  label: number;
}

interface SquareFillBadgeProps extends CommonBadgeProps {
  type: "square-fill";
  label: number | string;
}

interface SquareOutlinedBadgeProps extends CommonBadgeProps {
  type: "square-outlined";
  label: number | string;
}

// Combine the types using a union type
export type BadgeProps = RoundBadgeProps | SquareFillBadgeProps | SquareOutlinedBadgeProps;



