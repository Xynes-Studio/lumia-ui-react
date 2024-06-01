import { Flex } from "@app/View";
import { spacing, strokes, color } from "@shared/styles"; // corrected comment
import styled from "styled-components";

export const ButtonElementContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.button<{
  type: "fill" | "outlined" | "label";
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}>`
  all: unset;
  background-color: ${({ type, backgroundColor }) =>
    type !== "label" ? backgroundColor || "transparent" : "none"};
  border: ${({ type, borderColor }) =>
    type === "outlined"
      ? `${strokes?.s0} solid ${borderColor || color?.foreground}`
      : "none"};
  padding: ${spacing?.padding?.p0} ${spacing?.padding?.p2};
  border-radius: ${({ borderRadius }) =>
    borderRadius || spacing?.borderRadius?.r0}rem;
  position: relative;
  align-items: center;
  cursor: pointer;
`;
