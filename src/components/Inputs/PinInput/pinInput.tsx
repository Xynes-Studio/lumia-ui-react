"use client";
import { Flex } from "@app/View";
import { Text } from "@texts/Text/Text";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import PinInputFields from "./components/pinInputField"; // Importing the new component
import { PinInputContainer } from "./pinInput.style";
import { PinInputProps } from "./pinInput.types";
import { MyError } from "@utils/Validations";
import { Button } from "@components/index";
import { color } from "@shared/styles";
import { LmHide } from "@icons/lmHide";
import { LmShow } from "@icons/lmShow";

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
    validations,
    secret=false,
  },
  ref
) => {
  const [pinValue, setPinValue] = useState(value);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [visible,setVisible]=useState(false);
  useEffect(() => {
    onValueChange(pinValue);
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
  }, [label, onValueChange, pinValue, validations, value]);

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
              type={secret?(visible ? "text":"password"):"text"}
            />
          ))}
          {secret ? (
          <Button
            type="label"
            icon={visible ? LmHide : LmShow}
            color={color.foreground}
            onClick={() => setVisible(!visible)}
            style={{ padding: 0 }}
          />
        ) : null}
        </PinInputContainer>
        {errMsg && <Text type="error">{errMsg}</Text>}
      </Flex>
    </>
  );
};

export const PinInput = forwardRef<
  HTMLInputElement,
  PinInputProps & { value: string }
>(PinInputComponent);
