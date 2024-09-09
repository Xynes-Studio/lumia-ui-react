import { Flex } from "@app/View";
import styled from "styled-components";

export const BadgeContainer = styled(Flex)<{
  type: "round" | "square-fill" | "square-outlined";
  backgroundColor?: string;
}>`
  background-color: ${({ type, backgroundColor }) =>
    type !== "square-outlined" ? backgroundColor || "transparent" : "transparent"};
  border-radius: ${({ type, theme }) =>
    type === "round" ? "100%" : theme.spacing.borderRadius.r0};
  border: ${({ type, theme }) =>
    type === "square-outlined" ? `${theme.strokes.s0} solid ${theme.color.foreground}` : "none"};
  width: ${({ type }) => (type === "round" ? "1.2rem" : "fit-content")};
  height: ${({ type }) => (type === "round" ? "1.2rem" : "fit-content")};
  align-items: center;
  justify-content: center;
`;
