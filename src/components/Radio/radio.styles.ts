import { Flex } from "@app/View";
import { color, strokes } from "@shared/styles";
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
  border: ${({ checked }) =>
    checked
      ? `${strokes.s2} solid ${color.accent100}`
      : `${strokes.s0} solid ${color.foreground200}`};
  background-color: ${({ disabled }) =>
    disabled ? color.foregroundInverse400 : "transparent"};
  border-radius: 1.25rem;
  transition: background-color 0.3s;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
