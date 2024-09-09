// Link.styles.ts
import { Flex } from "@app/View";
// import { color } from '@shared/styles';
import styled from "styled-components";

export const StyledTickerWrap = styled.div<{ bg: string }>`
  margin: 0px 0;
  display: flex;
  overflow: hidden;
  background-color: ${({ bg }) => bg};
`;

export const TickerContainer = styled(Flex)<{
  speed: number;
  animDirection: "normal" | "reverse" | "alternate" | "alternate-reverse";
  delay: number;
  loop: boolean;
}>`
  width: fit-content;
  transform: translateX(100vw);
  animation: slide 100s linear infinite;
  animation-duration: ${({ speed }) => Math.abs(100 / speed)}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-direction: ${({animDirection})=>animDirection};
  animation-iteration-count: ${({loop})=>loop ? "infinite" : 1};
`;
