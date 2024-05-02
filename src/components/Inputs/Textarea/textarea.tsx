"use client";
import React, { forwardRef } from "react";
import { TextAreaProps } from "./textarea.type";
import styled from "styled-components";
import { cx } from "@utils/cx";
import { Text } from "@texts/Text/Text";
import { color, spacing, strokes, typography } from "@shared/styles";
import "./textarea.styles.css";
import { Flex } from "@app/View";

const TextareaComponent: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
  {
    type = "fill",
    label,
    errorMessage,
    placeholder = "Enter your text",
    ...props
  },
  ref
) => {
  const InputWrapper = styled(Flex)`
    padding: ${spacing?.padding?.p0} ${spacing?.padding?.p0};
    border-radius: ${spacing?.borderRadius?.r0};
    background-color: ${type !== "outline-only"
      ? color?.foregroundInverse400
      : "none"};
    border: ${type !== "fill"
      ? `${strokes?.s0} solid ${color?.border1}`
      : "null"};
    align-items: center;
  `;
  const TextareaContainer = styled.textarea`
    font-size: ${typography?.size?.input};
    width: 100%;
  `;

  return (
    <Flex direction="column">
      {label !== undefined ? (
        <Text textCase="capitalize" type="caption">
          {label}
        </Text>
      ) : null}
      <InputWrapper direction="row">
        <TextareaContainer
          aria-labelledby={label}
          aria-describedby={errorMessage}
          placeholder={placeholder}
          className={cx(props.className)}
          ref={ref}
          rows={4}
          cols={40}
          {...props}
        />
      </InputWrapper>
      {errorMessage !== undefined ? (
        <Text type="error">{errorMessage}</Text>
      ) : null}
    </Flex>
  );
};

export const Textarea = forwardRef(TextareaComponent);
