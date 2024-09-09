import { Flex } from "@app/View";
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
  border: ${({ type, borderColor, theme }) =>
    type === "outlined"
      ? `${theme.strokes.s0} solid ${borderColor || theme.color.foreground}`
      : "none"};
  padding: ${({ theme }) => theme.spacing.padding.p0} ${({ theme }) => theme.spacing.padding.p2};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius || theme.spacing.borderRadius.r0}rem;
  position: relative;
  align-items: center;
  cursor: pointer;
`;
