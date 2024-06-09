import { Flex } from "@app/View";
import styled from "styled-components";

export const SearchInputContainer = styled(Flex)`
  position: relative;
`;

export const SearchInputWrapper = styled(Flex)<{type: string}>`
  background-color: ${({ type, theme }) => type === "default"
    ? theme.color.foregroundInverse400
    : "none"};
  border: ${({ type, theme }) => type === "outline"
    ? `${theme.strokes.s0} solid ${theme.color.border100}`
    : "none"};
  padding: ${({ theme }) => theme.spacing.padding.p0} ${({ theme }) => theme.spacing.padding.p2};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.r0};
  box-shadow: ${({ type, theme }) => type === "shadow" ? theme.shadow : "none"};
`;

export const StyledSearchInput = styled.input`
  font-size: ${({ theme }) => theme.typography.size.input};
  margin-left: ${({ theme }) => theme.spacing.padding.p0} !important;
`;

export const SearchResultsWrapper = styled(SearchInputWrapper)`
  top: 18vh;
`;
