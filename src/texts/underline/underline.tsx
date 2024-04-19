import React, { forwardRef, HTMLAttributes } from "react";
import { cx } from "../../utils";
import styled from "styled-components";

interface UnderlineProps extends HTMLAttributes<HTMLSpanElement> {}

const UnderlineComponent: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  UnderlineProps
> = ({ className, children, ...props }, ref) => {
  const StyleSpan = styled.span`
    text-decoration: underline;
  `;

  return (
    <StyleSpan ref={ref} className={cx(className)} {...props}>
      {children}
    </StyleSpan>
  );
};

export const U = forwardRef(UnderlineComponent);
