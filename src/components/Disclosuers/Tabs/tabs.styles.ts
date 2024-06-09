import { Flex } from "@app/View";
import styled from "styled-components";

export const TabsContainer = styled.a<{disabled: boolean}>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const TabsWrapper = styled(Flex)<{
  selected: boolean;
  selectType: "select-100" | "select-200" | "select-300";
  directionInside: "horizontal" | "vertical"
}>`
  width: fit-content;
  height: fit-content;
  padding: ${({ theme }) => theme.spacing.padding.p1} ${({ theme }) => theme.spacing.padding.p4};
  align-items: center;
  background-color: ${({ theme, selectType, selected }) =>
    selected && selectType === "select-200" ? theme.color.accent100 : "transparent"};
  border-radius: ${({ theme, selectType }) =>
    selectType === "select-200" ? theme.spacing.borderRadius.r1 : "0"};
  border-bottom: ${({ theme, selectType, selected }) => {
    if (selectType === "select-100" && selected) {
      return `${theme.strokes.s2} solid ${theme.color.accent100}`;
    } else {
      return "none";
    }
  }};
  border-left: ${({ theme, selectType, selected }) => {
    if (selectType === "select-300" && selected) {
      return `${theme.strokes.s3} solid ${theme.color.accent100}`;
    } else {
      return "none";
    }
  }};
  &:hover {
    opacity: ${({ selected }) => (selected ? 1 : 0.7)};
  }
`;
