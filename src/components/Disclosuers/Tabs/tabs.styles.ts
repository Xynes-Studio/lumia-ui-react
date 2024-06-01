import { Flex } from "@app/View";
import { color, spacing, strokes } from "@shared/styles";
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
  padding: ${spacing.padding.p1} ${spacing.padding.p4};
  align-items: center;
  background-color: ${({ selectType, selected }) =>
    selected && selectType === "select-200" ? color?.accent100 : "transparent"};
  border-radius: ${({ selectType }) =>
    selectType === "select-200" && spacing.borderRadius.r1};
  border-bottom: ${({ selectType, selected }) => {
    if (selectType === "select-100" && selected) {
      return `${strokes?.s2} solid ${color?.accent100}`;
    } else {
      return "none";
    }
  }};
  border-left: ${({ selectType, selected }) => {
    if (selectType === "select-300" && selected) {
      return `${strokes?.s3} solid ${color?.accent100}`;
    } else {
      return "none";
    }
  }};
  &:hover {
    opacity: ${({ selected }) => (selected ? 1 : 0.7)};
  }
`;
