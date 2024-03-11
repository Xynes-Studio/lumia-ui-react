import React, { forwardRef } from "react";
import { cx } from "../../utils";
import { typography } from "../../shared/styles";
import styled from "styled-components";

export interface H2Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  type?: "sans" | "serif";
}

const H2Component: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  H2Props
> = ({ children, type = 'serif', ...props }, ref) => {
  const StyleH2 = styled.h2`
    font-family: ${type === "serif"
      ? typography.type.title
      : typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.l1};
  `;
  return (
    <StyleH2
      ref={ref}
      className={cx(props.className)}
      {...props}
    >
      {children}
    </StyleH2>
  );
};

export const H2 = forwardRef(H2Component);
