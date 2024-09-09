import { Flex } from "@app/View";
import styled from "styled-components";

export const SliderContainer = styled(Flex)``;

export const SliderWrapper = styled(Flex)`
  width: 100%;
  position: relative;
`;

export const PercentageViewer = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const SliderInput = styled.input<{
  backgroundColor: string;
  fillType: "slide" | "progress";
  progressColor: string;
  value: number;
}>`
  width: 100%;
  height: 1.25rem;
  border-radius: ${({ theme }) => theme.spacing.borderRadius.r4};
  overflow: hidden;
  -webkit-appearance: none;
  background: ${({ backgroundColor }) => backgroundColor};
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    visibility: ${({ fillType }) => (fillType === "progress" ? "hidden" : "visible")};
    box-shadow: ${({ theme }) => theme.shadow};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: ${({ theme }) => theme.spacing.borderRadius.r4};
    background: ${({ theme }) => theme.color.foregroundInverse};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    visibility: ${({ fillType }) => (fillType === "progress" ? "hidden" : "visible")};
    appearance: none;
    box-shadow: ${({ theme }) => theme.shadow};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: ${({ theme }) => theme.spacing.borderRadius.r4};
    background: ${({ theme }) => theme.color.foregroundInverse};
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    box-shadow: ${({ theme }) => theme.neumorphismShadow};
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: ${({ progressColor, value }) => `linear-gradient(
      to right,
      ${progressColor} 0%,
      ${progressColor} ${value}%,
      transparent ${value}%,
      transparent 100%
    )`};
  }

  &::-moz-range-track {
    box-shadow: ${({ theme }) => theme.neumorphismShadow};
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: ${({ progressColor, value }) => `linear-gradient(
      to right,
      ${progressColor} 0%,
      ${progressColor} ${value}%,
      transparent ${value}%,
      transparent 100%
    )`};
  }
`;
