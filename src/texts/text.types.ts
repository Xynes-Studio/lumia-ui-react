import { HTMLAttributes } from "react";

export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  type?: "sans" | "serif";
  numberOfLines?: number;
  editable?: boolean;
  onUpdate?: (value: string) => void;
}
