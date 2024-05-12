"use client";
import { Flex } from "@app/View";
import { Button } from "@components/Button/button";
import { LmHide } from "@icons/lmHide";
import { LmShow } from "@icons/lmShow";
import { color } from "@shared/styles";
import { Text } from "@texts/Text/Text";
import { cx } from "@utils/cx";
import React, { forwardRef, useEffect, useState } from "react";
import { InputWrapper, TextInputContainer } from "./textInput.styles";
import { TextInputProps } from "./textInput.type";
import { MyError } from "@utils/Validations";


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
    validations,
    ...props
  },
  ref
) => {
  const [visible, setVisible] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  useEffect(() => {
    setErrMsg(null);
    if (validations && validations.length > 0) {
      for (let i = 0; i < validations.length; i++) {
        const fn = validations[i].bind(this, value);
        try {
          fn();
        } catch (ex: unknown) {
          let err:MyError;
          if(ex instanceof MyError){
            err = ex as MyError;
            setErrMsg(err.message);
          }else{
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
      <InputWrapper type={type} weight={[15, 1]} direction="row">
        <TextInputContainer
          type={!visible ? inputType : "text"}
          placeholder={placeholder}
          className={cx(props.className)}
          ref={ref}
          value={value || ""}
          onChange={onChange}
          {...props}
        />
        {inputType === "password" ? (
          <Button
            type="label"
            icon={visible ? LmHide : LmShow}
            color={color.foreground}
            onClick={() => setVisible(!visible)}
            style={{ padding: 0 }}
          />
        ) : null}
      </InputWrapper>
      {errorMessage && <Text type="error">{errorMessage}</Text>}

      {(!errorMessage || errorMessage?.trim()=='')  && errMsg && <Text type="error">{errMsg}</Text>}
    </Flex>
  );
};

export const TextInput = forwardRef(TextInputComponent);
