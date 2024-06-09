import React, { forwardRef } from "react";
import { cx } from "../../utils";
import "../texts.styles.css";
import { HeaderProps } from "@texts/text.types";
import { StyleH1 } from "./h1.styles";

const H1Component: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeaderProps & { type?: "serif" | "sans-serif"; numberOfLines?: number }
> = (
  { children, type = "serif", numberOfLines = 0, editable = false, ...props },
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
    <StyleH1
      ref={ref}
      className={cx("lmTextComponent", props.className)}
      contentEditable={editable}
      type={type}
      numberOfLines={numberOfLines}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </StyleH1>
  );
};

export const H1 = forwardRef(H1Component);
