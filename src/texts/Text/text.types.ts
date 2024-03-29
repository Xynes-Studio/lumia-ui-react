import React from "react";

export interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  type?: "error" | "body" | "caption" | "code";
  textCase?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";
  language?: 'html'|'css'|'JS'|'rust'|'sql'|'php'|'python';
  editable?: boolean;
}