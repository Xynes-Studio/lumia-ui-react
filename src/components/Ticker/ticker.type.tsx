import React from "react";

export interface TickerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  stopOnHover?: boolean;
  backgroundColor?: string;
  speed?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 20 | 30 | 40 | 50;
  delay?: number;
  direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
  loop?: boolean;
}
