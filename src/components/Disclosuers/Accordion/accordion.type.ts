import React, { HtmlHTMLAttributes } from "react";

export interface AccordionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  headerText: string;
  children?: React.ReactNode;
  hidden?: boolean;
}
