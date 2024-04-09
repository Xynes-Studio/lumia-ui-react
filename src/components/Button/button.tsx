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
  HTMLDivElement,
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
  const ButtonContainer = styled(Flex)`
    background-color: ${type === "fill"
      ? bgColor
      : type === "outlined"
      ? bgColor
      : "none"};
    flex-direction: ${iconAtEnd ? "row-reverse" : "none"};
    border: ${type === "outlined" ? `${strokes?.s1} solid black` : "none"};
    border-radius: ${spacing?.borderRadius?.small};
    padding: calc(${spacing?.padding?.small} / 2) ${spacing?.padding?.medium};
  `;

  return (
    <ButtonContainer
      direction={iconAtEnd ? "row-reverse" : "row"}
      className={cx("lmButtonContainer")}
      ref={ref}
      {...props}
    >
      <LMAsset
        visible={icon !== undefined}
        Asset={icon !== undefined && icon}
        color={color}
        size={2}
      />
      <Text textCase="uppercase">{label}</Text>
    </ButtonContainer>
  );
};

export const Button = forwardRef(ButtonComponent);
