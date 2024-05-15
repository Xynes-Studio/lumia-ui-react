"use client";
import React, { forwardRef } from "react";
import { CheckboxProps } from "./checkbox.type";
import { cx } from "@utils/cx";
import { Text } from "@texts/Text/Text";
import { LmCkCheck } from "@icons/lmCkCheck";
import { LMAsset } from "@utils/LumiaAssetManager";
import { spacing } from "@shared/styles";
import {
  CheckboxContainer,
  CheckboxElement,
  StyledCheckbox,
} from "./checkbox.styles";

const CheckboxComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ label, onChange, value = false, ...props }, ref) => {
  return (
    <CheckboxContainer className={cx(props.className)}>
      <StyledCheckbox checked={value}>
        {value ? (
          <LMAsset visible={value} Asset={LmCkCheck} color="black" size={1.2} />
        ) : null}
        <CheckboxElement
          type="checkbox"
          ref={ref}
          checked={value}
          onChange={onChange}
          {...props}
        />
      </StyledCheckbox>

      {label != undefined && (
        <Text
          style={{ marginLeft: spacing.padding.p0 }}
          color="#000000"
          textCase="capitalize"
        >
          {label}
        </Text>
      )}
    </CheckboxContainer>
  );
};

export const Checkbox = forwardRef(CheckboxComponent);
