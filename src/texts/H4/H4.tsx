import React, { forwardRef } from "react";
import { cx } from "../../utils";
import { typography } from "../../shared/styles";
import styled from "styled-components";
import "../texts.styles.css";
import { HeaderProps } from "@texts/text.typoes";

const H4Component: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeaderProps
> = ({ children, type = "serif", numberOfLines = 0, ...props }, ref) => {
  const StyleH4 = styled.h4`
    font-family: ${type === "serif"
      ? typography.type.title
      : typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.m2};
    ${numberOfLines !== 0 &&
    `
      -webkit-line-clamp: ${numberOfLines};
      line-clamp: ${numberOfLines};
    `}
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
