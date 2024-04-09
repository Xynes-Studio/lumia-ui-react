"use client";
import React, { forwardRef } from "react";
import { ButtonProps } from "./button.type";
import styled from "styled-components";
import { cx } from "@utils/cx";
import { LMAsset } from "@utils/LumiaAssetManager";
import { Flex } from "@app/View";
import { Text } from "@texts/Text/Text";
import { color as globalColor } from "@shared/styles";
import { spacing, strokes } from "@shared/styles";
import "./button.styles.css";

const ButtonComponent: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (
  {
    type = "fill",
    icon,
    label = "BUTTON",
    color = globalColor.foreground,
    iconAtEnd = false,
    bgColor,
    ...props
  },
  ref
) => {
  const ButtonContainer = styled.button`
    background-color: ;
  `;

  return (
    <ButtonContainer className="lmButtonContainer" ref={ref} {...props}>
      <LMAsset
        visible={icon !== undefined}
        Asset={icon}
        color={color}
        size={1}
      />
      <Text>{label}</Text>
    </ButtonContainer>
  );
};

export const Button = forwardRef(ButtonComponent);
