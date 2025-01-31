"use client";
import { Flex } from "@app/View";
import { Text } from "@texts/Text/Text";
import { cx } from "@utils/cx";
import React, { forwardRef, useEffect, useMemo, useState } from "react";
import { InputWrapper, TextareaContainer } from "./textarea.styles";
import { TextAreaProps } from "./textarea.type";
import { MyError } from "@utils/Validations";
import { v4 as uuid } from "uuid";
import { useForms } from "@app/Contexts/formProvider/formProvider";

const TextareaComponent: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
  {
    type = "fill",
    label,
    errorMessage,
    placeholder = "Enter your text",
    onChange,
    value,
    validations = [],
    onValidationFail,
    formProvider = false,
    ...props
  },
  ref
) => {
  const key = useMemo(() => uuid(), []); // Memoize the key to avoid re-creation
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const { addError, removeError } = useForms(formProvider) ?? {};

  // Effect to remove error when the value changes
  useEffect(() => {
    if (removeError) removeError(key);
  }, [value, removeError, key]);

  // Effect to validate input on value change
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
      <InputWrapper className={cx(props.className)} type={type} direction="row">
        <TextareaContainer
          aria-labelledby={label}
          aria-describedby={errorMessage}
          placeholder={placeholder}
          className={cx(props.className)}
          onChange={onChange}
          value={value || ""}
          ref={ref}
          rows={4}
          cols={40}
          {...props}
        />
      </InputWrapper>
      {errorMessage && <Text type="error">{errorMessage}</Text>}
      {!errorMessage?.trim() && errMsg && <Text type="error">{errMsg}</Text>}
    </Flex>
  );
};

export const Textarea = forwardRef(TextareaComponent);
