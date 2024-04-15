"use client";
import React, { forwardRef, useState } from "react";
import { CheckboxProps } from "./checkbox.type";
import styled from "styled-components";
import { cx } from "@utils/cx";
import { Text } from "@texts/Text/Text";
import "./checkbox.styles.css";
import { Flex } from "@app/View";
import { LmCkCheck } from "@icons/lmCkCheck";
import { LMAsset } from "@utils/LumiaAssetManager";
import { color } from "@shared/styles";
import { spacing, strokes } from "@shared/styles";

const CheckboxComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ label, showIndeterminate = false, ...props }, ref) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsChecked(checked);
    // onChange(checked);
  };

  const CheckboxContainer = styled(Flex)``;
  const CheckboxElement = styled.input``;

  const CheckIconBox = styled(Flex)`
    background-color: ${color?.seagreen};
  `;

  const StyledCheckbox = styled.div<{ checked: boolean }>`
    position: relative;
    width: 1.2vw;
    height: 1.2vw;
    border: ${strokes?.s0} solid ${color?.brand100};
    background-color: ${color?.skyblue1};
    border-radius: ${spacing?.borderRadius?.s0};
  `;

  return (
    <CheckboxContainer className={cx("lmCheckboxContainer")}>
      <div>
        <StyledCheckbox checked={isChecked} className={cx("lmStyledCheckbox")}>
          {isChecked ? (
            <CheckIconBox className={cx("lmCheckIconBox")}>
              <LMAsset
                visible={isChecked}
                Asset={LmCkCheck}
                color="black"
                size={1.2}
              />
            </CheckIconBox>
          ) : null}
          <CheckboxElement
            type="checkbox"
            ref={ref}
            className={cx("lmCheckboxElement")}
            checked={isChecked}
            onChange={handleChange}
            {...props}
          />
        </StyledCheckbox>
      </div>
      <Text color="#000000" textCase="capitalize">
        {label}
      </Text>
    </CheckboxContainer>
  );
};

export const Checkbox = forwardRef(CheckboxComponent);
