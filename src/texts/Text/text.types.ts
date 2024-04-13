import React from "react";

export interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  type?: "error" | "body" | "caption";
  textCase?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";
  editable?: boolean;
  codeClassName?: string;
  numberOfLines?: number;
  onUpdate?: (value:string) => void;
}