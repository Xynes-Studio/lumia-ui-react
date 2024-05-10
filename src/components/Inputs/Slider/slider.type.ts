import React from "react";

export interface SliderProps
  extends React.HtmlHTMLAttributes<HTMLInputElement> {
  type?: "slide" | "progress";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  showPercentage?: boolean;
  label?: string;
  progressColor?: string;
  backgroundColor?: string;
}
