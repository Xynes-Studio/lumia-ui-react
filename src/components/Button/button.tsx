"use client";
import React, { forwardRef } from "react";
import { ButtonProps } from "./button.type";
import styled from "styled-components";
import { cx } from "@utils/cx";
import { LMAsset } from "@utils/LumiaAssetManager";
import { Text } from "@texts/Text/Text";
import { color as globalColor } from "@shared/styles";
import { spacing, strokes } from "@shared/styles";
import "./button.styles.css";
import { Flex } from "@app/View";

const ButtonComponent: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (
  {
    type = "fill",
    icon,
    label,
    color = globalColor.foreground,
    iconAtEnd = false,
    backgroundColor,
    borderColor = globalColor?.border100,
    borderRadius = spacing?.borderRadius?.r0,
    iconSize = 0.8,
    ...props
  },
  ref
) => {
  const ButtonContainer = styled.button`
    background-color: ${type !== "label" ? backgroundColor : "none"};
    border: ${type !== "outlined"
      ? "none"
      : `${strokes?.s0} solid  ${borderColor}`};
    padding: ${spacing?.padding?.p0} ${spacing?.padding?.p2};
    border-radius: ${borderRadius};
  `;

  return (
    <ButtonContainer className={cx("lmButtonContainer", props.className)} ref={ref} {...props}>
      <Flex className={cx("lmButtonElementContainer")} direction={iconAtEnd ? "row-reverse" : "row"}>
        {icon !== undefined ? (
          <LMAsset
            visible={icon !== undefined}
            Asset={icon}
            color={color}
            size={iconSize > 8 ? 8 : iconSize}
          />
        ) : null}
        {label != undefined && (
          <Text color={color} type="caption" textCase="uppercase">
            {label}
          </Text>
        )}
      </Flex>
    </ButtonContainer>
  );
};

export const Button = forwardRef(ButtonComponent);
