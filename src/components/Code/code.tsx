"use client";
import { forwardRef, useEffect, useState } from "react";
import { CodeProps } from "./code.types";
import { cx } from "@utils/cx";
import {
  formatCodeJS,
  formatHTML,
  formatCSS,
  formatRust,
  formatSQL,
  formatPHP,
  formatPython,
  formatCode,
} from "./codeSyntax";
import { StyledCode } from "./code.styles";

const CodeComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CodeProps
> = (
  { span = false, babel = false, code, editable = false, ...props },
  ref
) => {
  const [formattedCode, setFormattedCode] = useState<
    JSX.Element | string | null
  >(null);

  useEffect(() => {
    switch (props.language) {
      case "html":
        setFormattedCode(formatHTML(code, babel));
        break;
      case "css":
        setFormattedCode(formatCSS(code, babel));
        break;
      case "rust":
        setFormattedCode(formatRust(code, babel));
        break;
      case "sql":
        setFormattedCode(formatSQL(code, babel));
        break;
      case "php":
        setFormattedCode(formatPHP(code, babel));
        break;
      case "python":
        setFormattedCode(formatPython(code, babel));
        break;
      case "JS":
        setFormattedCode(formatCodeJS(code, babel));
        break;
      case "jsx":
        setFormattedCode(formatCodeJS(code, babel));
        break;
      case "javascript":
        setFormattedCode(formatCodeJS(code, babel));
        break;
      case "js":
        setFormattedCode(formatCodeJS(code, babel));
        break;
      default:
        setFormattedCode(formatCode(code, babel));
        break;
    }
  }, [code, props.language, babel]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLHeadingElement>) => {
    // Prevent line breaks on Enter key
    if (event.key === "Enter") {
      event.preventDefault();
    }
    const value = (event.target as HTMLHeadingElement).textContent;
    console.log("Value:", value);
  };
  return !span ? (
    <div
      ref={ref}
      contentEditable={editable}
      onKeyDown={handleKeyDown}
      className={cx(props.className)}
      {...props}
    >
      <pre>
        <StyledCode className={cx(`language-${props.language}`)}>
          {formattedCode}
        </StyledCode>
      </pre>
    </div>
  ) : (
    <span
      ref={ref}
      contentEditable={editable}
      onKeyDown={handleKeyDown}
      className={cx(props.className)}
      {...props}
    >
      <StyledCode className={cx(`language-${props.language}`)}>
        {formattedCode}
      </StyledCode>
    </span>
  );
};

export const Code = forwardRef(CodeComponent);
