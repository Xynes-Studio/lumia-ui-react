import React, { forwardRef } from "react";
import { cx } from "../../utils";
import { typography } from "../../shared/styles";
import styled from "styled-components";
import "../texts.styles.css";
import { HeaderProps } from "@texts/text.typoes";

const H1Component: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeaderProps
> = ({ children, type = "serif", numberOfLines = 0, ...props }, ref) => {
  const StyleH1 = styled.h1`
    font-family: ${type === "serif"
      ? typography.type.title
      : typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.l2};
    ${numberOfLines !== 0 &&
    `
      -webkit-line-clamp: ${numberOfLines};
      line-clamp: ${numberOfLines};
    `}
  `;
  return (
    <StyleH1
      ref={ref}
      className={cx("lmTextComponent", props.className)}
      {...props}
    >
      {children}
    </StyleH1>
  );
};

export const H1 = forwardRef(H1Component);
