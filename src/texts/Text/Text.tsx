import React, { forwardRef } from "react";
import { cx } from "../../utils";
import { typography } from "../../shared/styles";
import styled from "styled-components";
import "../texts.styles.css";
import { TextProps } from "./text.types";
import './code-highlighting.css';

const TextComponent: React.ForwardRefRenderFunction<
  HTMLParagraphElement,
  TextProps
> = ({ children, type = "body", textCase = "none", ...props }, ref) => {
  const StyleText = styled.p`
    font-family: ${type === "body"
      ? typography.type.primary
      : type === "error"
      ? typography.type.primary
      : type === "caption"
      ? typography.type.primary
      : typography.type.primary}; /* Default font family */
    font-size: ${type === "body"
      ? typography.size.s2
      : type === "error"
      ? typography.size.s3
      : type === "caption"
      ? typography.size.s2
      : typography.size.s2};
    line-height: 150%;
    text-transform: ${textCase};
  `;

  return (
    <StyleText
      ref={ref}
      className={cx("lmTextComponent", props.className)}
      {...props}
    >
      {children}
    </StyleText>
  );
};

export const Text = forwardRef(TextComponent);
