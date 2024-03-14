import React, { forwardRef } from "react";
import { cx } from "../../utils";
import { typography } from "../../shared/styles";
import styled from "styled-components";
import '../texts.styles.css';

export interface H4Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  type?: "sans" | "serif";
}

const H4Component: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  H4Props
> = ({ children, type = 'serif', ...props }, ref) => {
  const StyleH4 = styled.h4`
    font-family: ${type === "serif"
      ? typography.type.title
      : typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.m2};
  `;
  return (
    <StyleH4
      ref={ref}
      className={cx("lmTextComponent", props.className)}
      {...props}
    >
      {children}
    </StyleH4>
  );
};

export const H4 = forwardRef(H4Component);
