import styled from "styled-components";
import { Flex } from "../flex/flex";
import { RowProps } from "./row.types";
import { forwardRef } from "react";
import { color, strokes } from "@shared/styles"; 

const StyledRow = styled(Flex)<RowProps>`
  ${({ styleType }) => {
    switch (styleType) {
      case "outline":
        return ({ index }) => index && index !== 0 && `border-top: ${strokes.s0} solid ${color.border};`;
      case "alternative-fill":
        return `background-color: ${({ index }: { index: number }) =>
          index && index % 2 === 0
            ? color.foregroundInverse200
            : "transparent"};`;
      default:
        return "background-color: transparent;";
    }
  }}
`;

export const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const { children } = props;

  return (
    <StyledRow direction="row" ref={ref} {...props}>
      {children}
    </StyledRow>
  );
});
