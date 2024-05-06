import { Flex } from "@app/View";
import { shadow, spacing, strokes } from "@shared/styles";
import styled from "styled-components";

export const AlertContainer = styled(Flex)<{
  type: "flat" | "outlined" | "default";
  bgColor: string;
}>`
  background-color: ${({ bgColor }) => bgColor};
  border-width: ${({ type }) => (type === "outlined" ? strokes.s1 : 0)};
  box-shadow: ${({ type }) => (type === "default" ? shadow : "none")};
  max-width: 50%;
  position: relative;
  padding: ${spacing.padding.p0} ${spacing.padding.p2};
  border-radius: ${spacing.borderRadius.r0};
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    max-width: 90%;
  }
`;
