import React from "react";

export interface CodeProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  code: string,
  language?: 'html'|'css'|'JS'|'rust'|'sql'|'php'|'python';
  editable?: boolean;
  codeClassName?: string;
}