import React, { forwardRef } from "react";
import { cx } from "../../utils";
import { typography } from "../../shared/styles";
import styled from "styled-components";

export interface H1Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  type?: "sans" | "serif";
}

const H1Component: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  H1Props
> = ({ children, type = 'serif', ...props }, ref) => {
  const StyleH1 = styled.h1`
    font-family: ${type === "serif"
      ? typography.type.title
      : typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.l1};
  `;
  return (
    <StyleH1
      ref={ref}
      className={cx(props.className)}
      {...props}
    >
      {children}
    </StyleH1>
  );
};

export const H1 = forwardRef(H1Component);
