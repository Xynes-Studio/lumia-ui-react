import { Flex } from "@app/View";
import styled from "styled-components";

export const RadioContainer = styled(Flex)`
  width: fit-content;
  height: fit-content;
  align-items: center;
`;

export const RadioElement = styled.input`
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export const StyledRadio = styled(Flex)<{
  checked: boolean;
  disabled?: boolean;
}>`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  border: ${({ theme, checked }) =>
    checked
      ? `${theme.strokes.s2} solid ${theme.color.accent100}`
      : `${theme.strokes.s0} solid ${theme.color.foreground200}`};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.foregroundInverse400 : "transparent"};
  border-radius: 1.25rem;
  transition: background-color 0.3s;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
