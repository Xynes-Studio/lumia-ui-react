import { Flex } from "@app/View";
import { color, shadow, spacing, strokes, typography } from "@shared/styles";
import styled from "styled-components";

export const SearchInputContainer = styled(Flex)`
  position: relative;
`;
export const SearchInputWrapper = styled(Flex)<{type:string}>`
  background-color: ${props=>props.type === "default"
    ? color?.foregroundInverse400
    : "none"};
  border: ${props=>props.type === "outline"
    ? `${strokes?.s0} solid ${color?.border100}`
    : "null"};
  padding: ${spacing?.padding?.p0} ${spacing?.padding?.p2};
  border-radius: ${spacing?.borderRadius?.r0};
  box-shadow: ${props=>props.type === "shadow" ? shadow : "none"};
`;
export const StyledSearchInput = styled.input`
  font-size: ${typography?.size?.input};
  margin-left: ${spacing.padding.p0} !important;
`;

export const SearchResultsWrapper = styled(SearchInputWrapper)`
  top: 18vh;
`;
