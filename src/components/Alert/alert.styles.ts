import { Flex } from "@app/View";
import styled, { keyframes } from "styled-components";

// Keyframes for the transitions
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%);
  }
`;

// AlertContainer with transition and theme integration
export const AlertContainer = styled(Flex)<{
  type: "flat" | "outlined" | "default";
  bgColor: string;
  visible: boolean;
}>`
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: ${({ type, theme }) => (type === "default" ? theme.shadow : "none")};
  max-width: 50%;
  position: relative;
  padding: ${({ theme }) => theme.spacing.padding.p0} ${({ theme }) => theme.spacing.padding.p2};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.r1};
  overflow: hidden;
  border-width: ${({ type, theme }) => (type === "outlined" ? theme.strokes.s0 : 0)} !important;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.border100} !important;

  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.3s ease-out;
  display: ${({ visible }) => (visible ? "flex" : "none")};

  @media only screen and (max-width: 767px) {
    max-width: 90%;
  }
`;
