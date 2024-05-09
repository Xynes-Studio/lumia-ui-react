import { Flex } from "@app/View";
import { color, spacing } from "@shared/styles";
import styled from "styled-components";

export const PaginationWrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: ${spacing.padding.p1};
  gap: ${spacing.padding.p0};
`;

export const PaginationButton = styled.button<{ isActive?: boolean }>`
  background-color: ${({ isActive }) => (isActive ? color.accent100 : color.foregroundInverse300)};
  color: ${({ isActive }) => (isActive ? color.foreground : color.foreground)};
  border-radius: ${spacing.borderRadius.r0};
  padding: ${spacing.padding.p0} ${spacing.padding.p1};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PaginationEllipsis = styled.span`
  padding: ${spacing.padding.p1};
`;