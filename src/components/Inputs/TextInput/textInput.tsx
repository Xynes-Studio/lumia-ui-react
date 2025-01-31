"use client";
import { Flex } from "@app/View";
import { Button } from "@components/Button/button";
import { LmHide } from "@icons/lmHide";
import { LmShow } from "@icons/lmShow";
import { color } from "@shared/styles";
import { Text } from "@texts/Text/Text";
import { cx } from "@utils/cx";
import React, { forwardRef, useEffect, useMemo, useState } from "react";
import { InputWrapper, TextInputContainer } from "./textInput.styles";
import { TextInputProps } from "./textInput.type";
import { MyError } from "@utils/Validations";
import { v4 as uuid } from "uuid";
import { useForms } from "@app/Contexts/formProvider/formProvider";

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
    value,
    onChange,
    validations = [],
    onValidationFail,
    formProvider = false,
    ...props
  },
  ref
) => {
  const key = useMemo(() => uuid(), []); // Memoized key to prevent re-generation
  const [visible, setVisible] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const { addError, removeError } = useForms(formProvider) ?? {};

  // Remove error on value change
  useEffect(() => {
    if (removeError) {
      removeError(key);
    }
  }, [value, removeError, key]);

  // Validate input on value change
  useEffect(() => {
    let validationError: string | null = null;

    for (const validate of validations) {
      try {
        validate(value);
      } catch (ex) {
        onValidationFail && onValidationFail();
        addError && addError(key);

        if (ex instanceof MyError) {
          validationError = ex.message;
        } else {
          validationError = `${label} ${(ex as Error).message}`;
        }
        break;
      }
    }

    setErrMsg(validationError);
  }, [value, validations, key, label, addError]);

  return (
    <Flex direction="column">
      {label && (
        <Text textCase="capitalize" type="caption">
          {label}
        </Text>
      )}
      <InputWrapper
        className={cx(props.className)}
        type={type}
        weight={[15, 1]}
        direction="row"
      >
        <TextInputContainer
          type={visible ? "text" : inputType}
          placeholder={placeholder}
          className={cx(props.className)}
          ref={ref}
          value={value || ""}
          onChange={onChange}
          {...props}
        />
        {inputType === "password" && (
          <Button
            type="label"
            icon={visible ? LmHide : LmShow}
            color={color.foreground}
            onClick={() => setVisible((prev) => !prev)}
            style={{ padding: 0 }}
          />
        )}
      </InputWrapper>
      {errorMessage && <Text type="error">{errorMessage}</Text>}
      {!errorMessage?.trim() && errMsg && <Text type="error">{errMsg}</Text>}
    </Flex>
  );
};

export const TextInput = forwardRef(TextInputComponent);
