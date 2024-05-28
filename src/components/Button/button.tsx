"use client";
import React, { forwardRef } from "react";
import { ButtonProps } from "./button.type";
import { cx } from "@utils/cx";
import { LMAsset } from "@utils/LumiaAssetManager";
import { Text } from "@texts/Text/Text";
import { color as globalColor } from "@shared/styles";

import { ButtonContainer, ButtonElementContainer } from "./button.styles";

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
    backgroundColor = globalColor.accent100,
    borderColor = globalColor?.border100,
    borderRadius = 0.3,
    textCase = "uppercase",
    iconSize = 0.8,
    ...props
  },
  ref
) => {
  return (
    <ButtonContainer
      borderRadius={borderRadius}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      type={type}
      className={cx(props.className)}
      ref={ref}
      {...props}
    >
      <ButtonElementContainer direction={iconAtEnd ? "row-reverse" : "row"}>
        {icon !== undefined ? (
          <LMAsset
            visible={icon !== undefined}
            Asset={icon}
            color={color}
            size={iconSize > 8 ? 8 : iconSize}
          />
        ) : null}
        {label != undefined && (
          <Text color={color} type="caption" textCase={textCase}>
            {label}
          </Text>
        )}
      </ButtonElementContainer>
    </ButtonContainer>
  );
};

export const Button = forwardRef(ButtonComponent);
