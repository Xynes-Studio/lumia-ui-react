import React from "react";

export interface FlexProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  weight?: number[];
  maxRow?: number;
  wrap?: boolean;
}

type ValidateChildrenLength<T> = T extends { children: React.ReactNode[] }
  ? T extends { children: React.ReactNode[] }
    ? T["children"]["length"]
    : never
  : never;

type ValidateWeightLength<T> = T extends { weight: number[] }
  ? T["weight"]["length"]
  : never;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ChildrenAndWeightsLengthMustMatch<T> =
  ValidateChildrenLength<T> extends ValidateWeightLength<T> ? true : false;
