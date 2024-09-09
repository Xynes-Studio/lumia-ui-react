import React, { forwardRef } from "react";
import { RadioProps } from "./radio.type";
import { Text } from "@texts/index";
import { spacing } from "@shared/styles";
import { RadioContainer, RadioElement, StyledRadio } from "./radio.styles";

const RadioComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  RadioProps
> = ({ label, checked = false, disabled, ...props }, ref) => {
  return (
    <RadioContainer>
      <StyledRadio checked={checked}>
        <RadioElement
          type="radio"
          ref={ref}
          checked={checked}
          disabled={disabled}
          {...props}
        />
      </StyledRadio>

      {label != undefined && (
        <Text
          style={{ marginLeft: spacing.padding.p0 }}
          color="#000000"
          textCase="capitalize"
        >
          {label}
        </Text>
      )}
    </RadioContainer>
  );
};

export const Radio = forwardRef(RadioComponent);
