import { Flex } from "@app/View";
import { LMAsset } from "@utils/LumiaAssetManager";
import styled from "styled-components";

export const AccordionContainer = styled(Flex)``;

export const AccordionHeader = styled(Flex)`
  padding: ${({ theme }) => theme.spacing.padding.p1} ${({ theme }) => theme.spacing.padding.p2};
  border-bottom: ${({ theme }) => theme.strokes.s0} solid ${({ theme }) => theme.color.foreground};
  height: fit-content;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionBody = styled(Flex)`
  margin-top: ${({ theme }) => theme.spacing.padding.p2};
  overflow: hidden;
  transition: min-height 0.3s ease;
`;

export const AccordionShowIcon = styled(LMAsset)<{ rotated: boolean }>`
  min-width: 1.5rem;
  transform: ${({ rotated }) => (rotated ? "rotate(90deg)" : "rotate(0deg)")};
  transition: transform 1s ease;
  transform-origin: center;
  cursor: pointer;
`;

export const AccordionButton = styled.button`
  all: unset;
  cursor: pointer;
`;
