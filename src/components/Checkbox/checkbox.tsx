"use client";
import React, { forwardRef, useState, useEffect } from "react";
import { CheckboxProps } from "./checkbox.type";
import { cx } from "@utils/cx";
import { Text } from "@texts/Text/Text";
import { LmCkCheck } from "@icons/lmCkCheck";
import { LmCkMinus } from "@icons/lmCkMinus";
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
> = ({ label, showIndeterminate = false, value = false, ...props }, ref) => {
  const [checked, setChecked] = useState(value);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  return (
    <CheckboxContainer className={cx(props.className)}>
      <StyledCheckbox checked={showIndeterminate ? true : checked}>
        {showIndeterminate ? (
          <LMAsset visible={true} Asset={LmCkMinus} color="black" size={1} />
        ) : (
          <>
            {checked ? (
              <LMAsset
                visible={checked}
                Asset={LmCkCheck}
                color="black"
                size={1.2}
              />
            ) : null}
            <CheckboxElement
              type="checkbox"
              ref={ref}
              checked={checked}
              onChange={() => {
                props?.onUpdate && props?.onUpdate(!checked);
                setChecked(!checked);
              }}
              {...props}
            />
          </>
        )}
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
