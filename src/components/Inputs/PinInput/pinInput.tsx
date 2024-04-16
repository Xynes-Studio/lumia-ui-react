"use client";
import React, { useState, useRef, useEffect, forwardRef } from "react";
import styled from "styled-components";
import { PinInputProps } from "./pinInput.types";
import { Flex } from "@app/View";
import PinInputFields from "./components/pinInputField"; // Importing the new component
import { Text } from "@texts/Text/Text";

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
  },
  ref
) => {
  const [pinValue, setPinValue] = useState(value);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    onValueChange(pinValue);
  }, [onValueChange, pinValue]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedValue = event.target.value;
    const newPinValue =
      pinValue.slice(0, index) + updatedValue + pinValue.slice(index + 1);
    setPinValue(newPinValue);
    onValueChange(newPinValue);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      // If the current input field is empty and not the first one
      if (index > 0 && !inputRefs.current[index]?.value) {
        const newPinValue =
          pinValue.slice(0, index - 1) + pinValue.slice(index);
        setPinValue(newPinValue);

        // Focus the previous input field
        const prevIndex = index - 1;
        inputRefs.current[prevIndex]?.focus();
      }
    } else {
      // If the current input field is not empty and is not the last one
      if (
        index < numberOfFields - 1 &&
        pinValue[index] &&
        pinValue[index].trim() !== ""
      ) {
        // Focus the next input field
        const nextIndex = index + 1;
        inputRefs.current[nextIndex]?.focus();
      }
    }
  };

  const PinInputContainer = styled(Flex)``;

  return (
    <>
      <Flex
        direction="column"
        style={{
          alignItems: labelPosition,
        }}
      >
        {label != "" && <Text textCase="capitalize" type="caption" >{label}</Text>}
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
            />
          ))}
        </PinInputContainer>
      </Flex>
    </>
  );
};

export const PinInput = forwardRef<
  HTMLInputElement,
  PinInputProps & { value: string }
>(PinInputComponent);
