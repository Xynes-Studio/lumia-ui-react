import React, { forwardRef, HTMLAttributes } from "react";
import { cx } from "../../utils";
import styled from "styled-components";

interface ItalicProps extends HTMLAttributes<HTMLSpanElement> {}

const StyleSpan = styled.span`
  font-style: italic;
`;

const ItalicComponent: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  ItalicProps
> = ({ className, children, ...props }, ref) => {
  return (
    <StyleSpan ref={ref} className={cx(className)} {...props}>
      {children}
    </StyleSpan>
  );
};

export const I = forwardRef(ItalicComponent);
