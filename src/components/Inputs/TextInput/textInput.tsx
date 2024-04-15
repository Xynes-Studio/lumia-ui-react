"use client";
import React, { forwardRef, useState } from "react";
import { TextInputProps } from "./textInput.type";
import styled from "styled-components";
import { cx } from "@utils/cx";
import { Text } from "@texts/Text/Text";
import { color, spacing, strokes, typography } from "@shared/styles";
import "./textInput.styles.css";
import { LMAsset } from "@utils/LumiaAssetManager";
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
    placeholder = "Placeholder",
    ...props
  },
  ref
) => {
  const [visible, setVisible] = useState(false);

  const InputWrapper = styled.div`
    padding: ${spacing?.padding?.small} ${spacing?.padding?.medium};
    border-radius: ${spacing?.borderRadius?.small};
    background-color: ${type !== "outline-only"
      ? color?.foregroundInverse400
      : "none"};
    border: ${type !== "fill"
      ? `${strokes?.s0} solid ${color?.border1}`
      : "null"};
  `;
  const TextInputContainer = styled.input`
    font-size: ${typography?.size?.s1};
  `;

  return (
    <div className={cx("lmTextInputWrapper")}>
      {label !== undefined ? <Text textCase="capitalize">{label}</Text> : null}
      <InputWrapper className={cx("lmInputWrapper")}>
        <TextInputContainer
          type={!visible ? inputType : "text"}
          className={cx("lmTextInputContainer")}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {inputType === "password" ? (
          <LMAsset
            //   style={iconAtEnd ? { marginLeft: "0.5vw" } : { marginRight: "0.5vw" }}
            visible={true}
            Asset={visible ? LmHide : LmShow}
            color="#000000"
            size={1}
            onClick={() => {
              setVisible(!visible);
            }}
          />
        ) : null}
      </InputWrapper>
      {errorMessage !== undefined ? (
        <Text type="error">{errorMessage}</Text>
      ) : null}
    </div>
  );
};

export const TextInput = forwardRef(TextInputComponent);
