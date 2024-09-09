import React, { forwardRef, HTMLAttributes } from "react";
import { cx } from "../../utils";
import styled from "styled-components";

interface BoldProps extends HTMLAttributes<HTMLSpanElement> {}

const StyleSpan = styled.span`
  font-weight: bold;
`;

const BoldComponent: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  BoldProps
> = ({ className, children, ...props }, ref) => {
  return (
    <StyleSpan ref={ref} className={cx(className)} {...props}>
      {children}
    </StyleSpan>
  );
};

export const Bold = forwardRef(BoldComponent);
