import React, { forwardRef } from "react";
import { cx } from "../../utils";
import "../texts.styles.css";
import { HeaderProps } from "@texts/text.types";
import { StyleH3 } from "./h3.styles";

const H3Component: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeaderProps
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
    <StyleH3
      ref={ref}
      type={type}
      numberOfLines={numberOfLines}
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
