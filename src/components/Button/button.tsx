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
    backgroundColor,
    borderColor = globalColor?.border1,
    borderRadius = spacing?.borderRadius?.small,
    ...props
  },
  ref
) => {
  const ButtonContainer = styled.button`
    background-color: ${type !== "label" ? backgroundColor : "none"};
    border: ${type !== "outlined"
      ? "none"
      : `${strokes?.s0} solid ${globalColor?.border1}`};
    padding: calc(${spacing?.padding?.small} / 2) ${spacing?.padding?.medium};
    border-radius: ${borderRadius};
    flex-direction: ${iconAtEnd ? "row-reverse" : "row"};
  `;

  return (
    <ButtonContainer className={cx("lmButtonContainer")} ref={ref} {...props}>
      <LMAsset
        style={iconAtEnd ? { marginLeft: "0.8vw" } : { marginRight: "0.8vw" }}
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
