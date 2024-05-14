import React, { forwardRef } from "react";
import "./slider.styles.css";
import styled from "styled-components";
import { Flex } from "@app/View";
import { Text } from "@texts/index";
import { cx } from "@utils/cx";
import { spacing, color, neumorphismShadow, shadow } from "@shared/styles";
import { SliderProps } from "./slider.type";

const SliderComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  SliderProps
> = (
  {
    type = "slide",
    onChange,
    value,
    progressColor = color?.accent100,
    backgroundColor = color?.foregroundInverse300,
    showPercentage,
    label,
    ...props
  },
  ref
) => {
  const SliderContainer = styled(Flex)``;
  const SliderInput = styled.input`
    width: 100%;
    border-radius: ${spacing?.borderRadius?.r4};
    overflow: hidden;
    /* box-shadow: ${neumorphismShadow}; */
    -webkit-appearance: none;
    background: ${backgroundColor};
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      visibility: ${type === "progress" ? "hidden" : "visible"};
      appearance: none;
      box-shadow: ${shadow};
      width: 20px;
      height: 20px;
      border-radius: ${spacing?.borderRadius?.r4};
      background: ${color.foregroundInverse};
      cursor: pointer;
    }

    &::-moz-range-thumb {
      visibility: ${type === "progress" ? "hidden" : "visible"};
      appearance: none;
      box-shadow: ${shadow};
      width: 20px;
      height: 20px;
      border-radius: ${spacing?.borderRadius?.r4};
      background: ${color.foregroundInverse};
      cursor: pointer;
    }

    &::-webkit-slider-runnable-track {
      box-shadow: ${neumorphismShadow};
      width: 100%;
      height: 100%;
      cursor: pointer;
      background: linear-gradient(
        to right,
        ${progressColor} 0%,
        ${progressColor} ${value}%,
        transparent ${value}%,
        transparent 100%
      );
    }

    &::-moz-range-track {
      box-shadow: ${neumorphismShadow};
      width: 100%;
      height: 100%;
      cursor: pointer;
      background: linear-gradient(
        to right,
        ${progressColor} 0%,
        ${progressColor} ${value}%,
        transparent ${value}%,
        transparent 100%
      );
    }
  `;

  const SliderWrapper = styled(Flex)`
    position: relative;
  `;
  const PercentageViewer = styled(Flex)`
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  `;

  return (
    <SliderContainer
      direction="column"
      className={cx("lmSliderContainer", props.className)}
    >
      {label !== undefined ? (
        <Text textCase="capitalize" className={cx("lmSliderLabel")}>
          {label}:
        </Text>
      ) : null}
      <SliderWrapper direction="row" className={cx("lmSliderWrapper")}>
        <SliderInput
          type="range"
          value={value}
          onChange={onChange}
          ref={ref}
          {...props}
        />
        {showPercentage ? (
          <PercentageViewer className="">
            <Text type="error" color={color?.foreground}>
              {value}%
            </Text>
          </PercentageViewer>
        ) : null}
      </SliderWrapper>
    </SliderContainer>
  );
};

export const Slider = forwardRef(SliderComponent);
