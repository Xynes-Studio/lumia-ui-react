import { Flex } from "@app/View";
import { background, color, spacing, strokes } from "@shared/styles";
import styled from "styled-components";

export const CheckboxContainer = styled(Flex)`
  width: fit-content;
  height: fit-content;
  align-items: center;
`;

export const CheckboxElement = styled.input`
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export const StyledCheckbox = styled(Flex)<{ checked: boolean }>`
  position: relative;
  width: 3vh;
  height: 3vh;
  border: ${strokes?.s0} solid ${color?.foreground200};
  background-color: ${({ checked }) => (checked ? color?.accent100 : background?.positive)};
  border-radius: ${spacing.borderRadius.r0};
  transition: background-color 0.3s;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
