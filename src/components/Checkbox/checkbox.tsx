"use client";
import React, { forwardRef } from "react";
import { CheckboxProps } from "./checkbox.type";
import styled from "styled-components";
import { cx } from "@utils/cx";
import { Text } from "@texts/Text/Text";
import "./checkbox.styles.css";
import { Flex } from "@app/View";
import { LmCkCheck } from "@icons/lmCkCheck";
import { LMAsset } from "@utils/LumiaAssetManager";
import { background, color, spacing } from "@shared/styles";
import { strokes } from "@shared/styles";

const CheckboxComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = ({ label, onChange, value = false, ...props }, ref) => {
  const CheckboxContainer = styled(Flex)``;
  const CheckboxElement = styled.input``;

  const StyledCheckbox = styled(Flex)<{ checked: boolean }>`
    position: relative;
    width: 3vh;
    height: 3vh;
    border: ${strokes?.s0} solid ${color?.foreground200};
    background-color: ${value? color?.accent100 : background?.positive};
    border-radius: 0.5vh;
  `;

  return (
    <CheckboxContainer className={cx("lmCheckboxContainer")}>
      <StyledCheckbox checked={value} className={cx("lmStyledCheckbox")}>
        {value ? (
            <LMAsset
              visible={value}
              Asset={LmCkCheck}
              color="black"
              size={1.2}
            />
        ) : null}
        <CheckboxElement
          type="checkbox"
          ref={ref}
          className={cx("lmCheckboxElement")}
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
