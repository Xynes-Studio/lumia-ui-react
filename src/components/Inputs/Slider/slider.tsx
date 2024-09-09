import React, { forwardRef } from "react";
import "./slider.styles.css";
import { Text } from "@texts/index";
import { cx } from "@utils/cx";
import { SliderProps } from "./slider.type";
import { PercentageViewer, SliderContainer, SliderInput, SliderWrapper } from "./slider.styles";
import { color } from "@shared/styles";

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
          fillType={type}
          backgroundColor={backgroundColor}
          progressColor={progressColor}
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
