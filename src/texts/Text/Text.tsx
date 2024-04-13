import React, { forwardRef } from "react";
import { cx } from "../../utils";
import { color, typography } from "../../shared/styles";
import styled from "styled-components";
import "../texts.styles.css";
import { TextProps } from "./text.types";

const TextComponent: React.ForwardRefRenderFunction<
  HTMLParagraphElement,
  TextProps
> = (
  {
    children,
    type = "body",
    textCase = "none",
    numberOfLines = 0,
    editable = false,
    ...props
  },
  ref
) => {
  const StyleText = styled.p`
    font-family: ${type === "body"
      ? typography.type.primary
      : type === "error"
      ? typography.type.primary
      : typography.type.primary}; /* Default font family */
    font-size: ${type === "body"
      ? typography.size.s3
      : type === "error"
      ? typography.size.s2
      : typography.size.s2};
    color: ${type === "body"
      ? color.foreground
      : type === "error"
      ? color.error100
      : color.foreground};
    color: ${props?.color};
    line-height: 130%;
    text-transform: ${textCase};
    ${numberOfLines !== 0 &&
    `
      -webkit-line-clamp: ${numberOfLines};
      line-clamp: ${numberOfLines};
    `}
  `;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLHeadingElement>) => {
    // Prevent line breaks on Enter key
    if (event.key === "Enter") {
      event.preventDefault();
    }
    const value = (event.target as HTMLHeadingElement).textContent;
    value && props.onUpdate && props.onUpdate(value);
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
