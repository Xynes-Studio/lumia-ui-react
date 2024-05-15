import { Flex } from "@app/View";
import { spacing, strokes, color } from "@shared/styles"; // added globalColor import
import styled from "styled-components";

export const BadgeContainer = styled(Flex)<{
  type: "round" | "square-fill" | "square-outlined";
  backgroundColor?: string;
}>`
  background-color: ${({ type, backgroundColor }) =>
    type !== "square-outlined"
      ? backgroundColor || "transparent"
      : "transparent"};
  border-radius: ${({ type }) =>
    type === "round" ? "100%" : spacing.borderRadius.r0};
  border: ${({ type }) =>
    type === "square-outlined"
      ? `${strokes.s0} solid ${color.foreground}`
      : "none"};
  width: ${({ type }) => (type === "round" ? "4vw" : "fit-content")};
  height: ${({ type }) => (type === "round" ? "4vw" : "fit-content")};
  align-items: center;
  justify-content: center;
`;
