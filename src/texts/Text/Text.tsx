import React, { forwardRef } from "react";
import { cx } from "../../utils";
import { color, typography } from "../../shared/styles";
import styled from "styled-components";
import "../texts.styles.css";
import { TextProps } from "./text.types";
import "./code-highlighting.css";

const TextComponent: React.ForwardRefRenderFunction<
  HTMLParagraphElement,
  TextProps
> = (
  { children, type = "body", textCase = "none", editable = false, ...props },
  ref
) => {
  const StyleText = styled.p`
    font-family: ${type === "body"
      ? typography.type.primary
      : type === "error"
      ? typography.type.primary
      : type === "caption"
      ? typography.type.primary
      : typography.type.primary}; /* Default font family */
    font-size: ${type === "body"
      ? typography.size.s3
      : type === "error"
      ? typography.size.s2
      : type === "caption"
      ? typography.size.s2
      : typography.size.s2};
    color: ${type === "body"
      ? color.foreground
      : type === "error"
      ? color.foreground
      : type === "caption"
      ? color.foreground
      : color.foreground};
    line-height: 150%;
    text-transform: ${textCase};
  `;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLHeadingElement>) => {
    // Prevent line breaks on Enter key
    if (event.key === "Enter") {
      event.preventDefault();
    }
    const value = (event.target as HTMLHeadingElement).textContent;
    console.log("Value:", value);
  };
  return (
    <StyleText
      ref={ref}
      className={cx("lmTextComponent", props.className)}
      contentEditable={editable}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </StyleText>
  );
};

export const Text = forwardRef(TextComponent);
