"use client";
import { Flex } from "@app/View";
import { Text } from "@texts/Text/Text";
import { cx } from "@utils/cx";
import React, { forwardRef, useEffect, useState } from "react";
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
    validations,
    onValidationFail,
    formProvider = false,
    ...props
  },
  ref
) => {
  const key = uuid();
  const [errMsg, setErrMsg] = useState<string | null>();
  const { addError, removeError } = useForms(formProvider) ?? {};

  useEffect(() => {
    removeError && removeError(key);
  }, [value]);

  useEffect(() => {
    setErrMsg(null);
    if (validations && validations.length > 0) {
      for (let i = 0; i < validations.length; i++) {
        const fn = validations[i].bind(this, value);
        try {
          fn();
        } catch (ex: unknown) {
          onValidationFail && onValidationFail();
          if (onValidationFail && addError) {
            addError(key);
          }
          let err: MyError;
          if (ex instanceof MyError) {
            err = ex as MyError;
            setErrMsg(err.message);
          } else {
            err = ex as Error;
            setErrMsg(label + " " + err.message);
          }
          break;
        }
      }
    }
  }, [value, validations, label]);

  return (
    <Flex direction="column">
      {label !== undefined ? (
        <Text textCase="capitalize" type="caption">
          {label}
        </Text>
      ) : null}
      <InputWrapper className={cx(props.className)} type={type} direction="row">
        <TextareaContainer
          aria-labelledby={label}
          aria-describedby={errorMessage}
          placeholder={placeholder}
          className={cx(props.className)}
          onChange={onChange}
          value={value}
          ref={ref}
          rows={4}
          cols={40}
          {...props}
        />
      </InputWrapper>
      {errorMessage && <Text type="error">{errorMessage}</Text>}

      {(!errorMessage || errorMessage?.trim() == "") && errMsg && (
        <Text type="error">{errMsg}</Text>
      )}
    </Flex>
  );
};

export const Textarea = forwardRef(TextareaComponent);
