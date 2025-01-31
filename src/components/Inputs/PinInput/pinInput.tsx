"use client";
import { Flex } from "@app/View";
import { Text } from "@texts/Text/Text";
import React, { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import PinInputFields from "./components/pinInputField"; // Importing the new component
import { PinInputContainer } from "./pinInput.style";
import { PinInputProps } from "./pinInput.types";
import { MyError } from "@utils/Validations";
import { Button } from "@components/index";
import { color } from "@shared/styles";
import { LmHide } from "@icons/lmHide";
import { LmShow } from "@icons/lmShow";
import { useForms } from "@app/Contexts/formProvider/formProvider";
import { v4 as uuid } from "uuid";

const PinInputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  PinInputProps & { value: string }
> = (
  {
    label = "",
    numberOfFields = 4,
    onValueChange,
    value,
    fillType = "fill",
    labelPosition = "start",
    validations = [],
    onValidationFail,
    secret = false,
    formProvider = false,
  },
  ref
) => {
  const key = useMemo(() => uuid(), []); // Memoize the key to avoid re-creation
  const [pinValue, setPinValue] = useState(value);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const { addError, removeError } = useForms(formProvider) ?? {};

  useEffect(() => {
    onValueChange(pinValue);
    removeError?.(key); // Clear error on value change
    validatePinValue(pinValue); // Validate the new pin value
  }, [pinValue, onValueChange, removeError, key]);

  const validatePinValue = (value: string) => {
    setErrMsg(null);
    for (const validate of validations) {
      try {
        validate(value);
      } catch (ex) {
        onValidationFail && onValidationFail();
        addError && addError(key);
        const errorMessage =
          ex instanceof MyError
            ? ex.message
            : `${label} ${(ex as Error).message}`;
        setErrMsg(errorMessage);
        break;
      }
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedValue = event.target.value;
    const newPinValue =
      pinValue.slice(0, index) + updatedValue + pinValue.slice(index + 1);
    setPinValue(newPinValue);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && index > 0 && !pinValue[index]) {
      const newPinValue = pinValue.slice(0, index - 1) + pinValue.slice(index);
      setPinValue(newPinValue);
      inputRefs.current[index - 1]?.focus(); // Focus previous input field
    } else if (event.key !== "Backspace" && index < numberOfFields - 1) {
      inputRefs.current[index + 1]?.focus(); // Focus next input field
    }
  };

  return (
    <Flex direction="column" style={{ alignItems: labelPosition }}>
      {label && (
        <Text textCase="capitalize" type="caption">
          {label}
        </Text>
      )}
      <PinInputContainer>
        {Array.from({ length: numberOfFields }, (_, index) => (
          <PinInputFields
            key={index}
            ref={(element) => {
              inputRefs.current[index] = element;
              if (ref) {
                if (typeof ref === "function") {
                  ref(element);
                } else {
                  ref.current = element;
                }
              }
            }}
            index={index}
            value={pinValue[index] || ""}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyPress(e, index)}
            fillType={fillType}
            type={secret && !visible ? "password" : "text"}
          />
        ))}
        {secret && (
          <Button
            type="label"
            icon={visible ? LmHide : LmShow}
            color={color.foreground}
            onClick={() => setVisible(!visible)}
            style={{ padding: 0 }}
          />
        )}
      </PinInputContainer>
      {errMsg && <Text type="error">{errMsg}</Text>}
    </Flex>
  );
};

export const PinInput = forwardRef<
  HTMLInputElement,
  PinInputProps & { value: string }
>(PinInputComponent);
