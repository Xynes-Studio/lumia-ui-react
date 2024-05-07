"use client";
import React, { forwardRef, useState } from "react";
import { TextInputProps } from "./textInput.type";
import styled from "styled-components";
import { cx } from "@utils/cx";
import { Text } from "@texts/Text/Text";
import { color, spacing, strokes, typography } from "@shared/styles";
import "./textInput.styles.css";
import { Flex } from "@app/View";
import { Button } from "@components/Button/button";
import { LmHide } from "@icons/lmHide";
import { LmShow } from "@icons/lmShow";

const TextInputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = (
  {
    type = "fill",
    inputType = "text",
    label,
    errorMessage,
    placeholder = "Enter your text",
    ...props
  },
  ref
) => {
  const [visible, setVisible] = useState(false);

  const InputWrapper = styled(Flex)`
    padding: ${spacing?.padding?.p0} ${spacing?.padding?.p1};
    border-radius: ${spacing?.borderRadius?.r0};
    background-color: ${type !== "outline-only"
      ? color?.foregroundInverse400
      : "none"};
    border: ${type !== "fill"
      ? `${strokes?.s0} solid ${color?.border100}`
      : "null"};
    align-items: center;
  `;
  const TextInputContainer = styled.input`
    font-size: ${typography?.size?.input};
  `;

  return (
    <Flex direction="column">
      {label !== undefined ? (
        <Text textCase="capitalize" type="caption">
          {label}
        </Text>
      ) : null}
      <InputWrapper weight={[15, 1]} direction="row">
        <TextInputContainer
          type={!visible ? inputType : "text"}
          placeholder={placeholder}
          className={cx(props.className)}
          ref={ref}
          {...props}
        />
        {inputType === "password" ? (
          <Button
            type="label"
            icon={visible ? LmHide : LmShow}
            color={color.foreground}
            onClick={() => setVisible(!visible)}
            style={{padding: 0}}
          />
        ) : null}
      </InputWrapper>
      {errorMessage !== undefined ? (
        <Text type="error">{errorMessage}</Text>
      ) : null}
    </Flex>
  );
};

export const TextInput = forwardRef(TextInputComponent);
