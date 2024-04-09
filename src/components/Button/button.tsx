"use client";
import React, { forwardRef } from "react";
import { ButtonProps } from "./button.type";
import styled from "styled-components";
import { cx } from "@utils/cx";
import { LMAsset } from "@utils/LumiaAssetManager";
import { Text } from "@texts/Text/Text";
import { color as globalColor } from "@shared/styles";
import { spacing } from "@shared/styles";
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
    borderColor = globalColor?.border,
    borderRadius = spacing?.borderRadius?.small,
    ...props
  },
  ref
) => {
  const ButtonContainer = styled.button`
    background-color: ${type !== "label" ? bgColor : "none"};
    border: ${type !== "outlined" ? "none" : `0.3vw solid ${borderColor} `};
    padding: calc(${spacing?.padding?.small} / 4) ${spacing?.padding?.small};
    border-radius: ${borderRadius};
    flex-direction: ${iconAtEnd && "row-reverse"};
  `;

  return (
    <ButtonContainer className={cx("lmButtonContainer")} ref={ref} {...props}>
      <LMAsset
        style={iconAtEnd ? { marginLeft: "0.5vw" } : { marginRight: "0.5vw" }}
        visible={icon !== undefined}
        Asset={icon}
        color={color}
        size={1.5}
      />
      <Text color={color} textCase="uppercase">
        {label}
      </Text>
    </ButtonContainer>
  );
};

export const Button = forwardRef(ButtonComponent);
