import { color, neumorphismShadow, spacing } from "@shared/styles";
import styled from "styled-components";

export const SwitchContainer = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  margin: ${spacing.padding.p1};
`;

export const StyledSwitch = styled.button<{
  activeColor: string;
  switchVal: boolean;
  inactiveColor: string;
}>`
  width: 3rem;
  height: 1.5rem;
  border-radius: 2vw;
  align-items: center;
  transition: all 1s;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: ${neumorphismShadow};
  background-color: ${({ switchVal, activeColor, inactiveColor }) =>
    switchVal ? activeColor : inactiveColor};
`;

export const Indicator = styled.div<{ active: boolean }>`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 1.25rem;
  transition: all 1s;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: ${color.foregroundInverse};
  transform: ${({ active }) => (active ? `translateX(1.5rem)` : `translateX(0.25rem)`)};
`;
