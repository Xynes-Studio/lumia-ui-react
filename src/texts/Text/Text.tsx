import React, { forwardRef } from "react";
import { cx } from "../../utils";
import "../texts.styles.css";
import { TextProps } from "./text.types";
import { StyleText } from "./text.styles";

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
      type={type}
      textCase={textCase}
      numberOfLines={numberOfLines}
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
