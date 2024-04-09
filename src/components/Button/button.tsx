"use client";
import React, { forwardRef } from "react";
import { ButtonProps } from "./button.type";
import styled from "styled-components";
import { LmCheckmarkInCircle } from "@icons/lmCheckmarkInCircle";
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
    iconOne = LmCheckmarkInCircle,
    // iconTwo,
    label = "BUTTON",
    color = globalColor.foreground,
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
    border: ${type === "outlined" ? `${strokes?.s1} solid black` : "none"};
    border-radius: ${spacing?.borderRadius?.small};
    align-items: center;
    padding: ${spacing?.padding?.small};
    position: relative;
  `;

  return (
    <ButtonContainer className={cx("lmButtonContainer")} ref={ref} {...props}>
      <LMAsset
        visible={iconOne !== undefined ? true : false}
        Asset={iconOne}
        color={color}
        size={1.5}
      />
      <Text textCase="uppercase">{label}</Text>
      {/* <LMAsset
        visible={iconTwo !== undefined ? true : false}
        Asset={iconTwo}
        color={color}
        size={1.5}
      /> */}
    </ButtonContainer>
  );
};

export const Button = forwardRef(ButtonComponent);
