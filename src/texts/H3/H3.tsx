import React, { forwardRef } from "react";
import { cx } from "../../utils";
import { typography } from "../../shared/styles";
import styled from "styled-components";
import "../texts.styles.css";
import { HeaderProps } from "@texts/text.types";

const H3Component: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeaderProps
> = (
  { children, type = "serif", numberOfLines = 0, editable = false, ...props },
  ref
) => {
  const StyleH3 = styled.h3`
    font-family: ${type === "serif"
      ? typography.type.title
      : typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.h3};
    color: ${props?.color};
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
    <StyleH3
      ref={ref}
      className={cx("lmTextComponent", props.className)}
      contentEditable={editable}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </StyleH3>
  );
};

export const H3 = forwardRef(H3Component);
