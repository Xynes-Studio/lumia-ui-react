import { Flex } from "@app/View";
import styled from "styled-components";

export const InputWrapper = styled(Flex)<{ type: string }>`
  padding: ${({ theme }) => theme.spacing.padding.p0} ${({ theme }) => theme.spacing.padding.p0};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.r0};
  background-color: ${({ theme, type }) =>
    type !== "outline-only" ? theme.color.foregroundInverse400 : "none"};
  border: ${({ theme, type }) =>
    type !== "fill" ? `${theme.strokes.s0} solid ${theme.color.border100}` : "none"};
  align-items: center;
`;

export const TextareaContainer = styled.textarea`
  font-size: ${({ theme }) => theme.typography.size.input};
  width: 100%;
`;
