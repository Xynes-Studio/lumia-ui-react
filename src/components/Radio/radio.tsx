import React, { forwardRef } from "react";
import { RadioProps } from "./radio.type";
import styled from "styled-components";
import { Flex } from "@app/View";
import { Text } from "@texts/index";
import { cx } from "@utils/cx";
import { spacing, strokes, color } from "@shared/styles";
import "./radio.styles.css";

const RadioComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  RadioProps
> = ({ label, checked = false, disabled, ...props }, ref) => {
  const RadioContainer = styled(Flex)``;
  const RadioElement = styled.input``;
  const StyledRadio = styled(Flex)<{ checked: boolean }>`
    position: relative;
    width: 3vh;
    height: 3vh;
    border: ${checked
      ? `${strokes?.s2} solid ${color?.accent100}`
      : `${strokes?.s0} solid ${color?.foreground200}`};
    background-color: ${disabled ? color?.foregroundInverse400 : "transparent"};
    border-radius: 2vh;
  `;

  return (
    <RadioContainer className={cx("lmRadioContainer", props.className)}>
      <StyledRadio checked={checked} className={cx("lmStyledRadio")}>
        <RadioElement
          type="radio"
          ref={ref}
          className={cx("lmRadioElement")}
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
