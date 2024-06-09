import { Flex } from "@app/View";
import styled from "styled-components";

export const PaginationWrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.padding.p1};
  gap: ${({ theme }) => theme.spacing.padding.p0};
`;

export const PaginationButton = styled.button<{ isActive?: boolean }>`
  background-color: ${({ isActive, theme }) => (isActive ? theme.color.accent100 : theme.color.foregroundInverse300)};
  color: ${({ isActive, theme }) => (isActive ? theme.color.foreground : theme.color.foreground)};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.r0};
  padding: ${({ theme }) => theme.spacing.padding.p0} ${({ theme }) => theme.spacing.padding.p1};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PaginationEllipsis = styled.span`
  padding: ${({ theme }) => theme.spacing.padding.p1};
`;
