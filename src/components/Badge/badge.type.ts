import React from "react";

// Define a base type for common props
interface CommonBadgeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  color?: string;
  backgroundColor?: string;
}

// Define separate types for each badge type
export interface RoundBadgeProps extends CommonBadgeProps {
  type: "round";
  label: number;
}

export interface SquareBadgeProps extends CommonBadgeProps {
  type: "square-fill" | "square-outlined";
  label: number | string;
}

// Combine the types using a union type
export type BadgeProps = RoundBadgeProps | SquareBadgeProps;

export const isRound = (_props: BadgeProps): _props is RoundBadgeProps => true;
export const isSquare = (_props: BadgeProps): _props is SquareBadgeProps => true;