import { Flex } from "@app/View";
import { color, spacing, strokes } from "@shared/styles";
import { LMAsset } from "@utils/LumiaAssetManager";
import styled from "styled-components";

export const AccordionContainer = styled(Flex)``;

export const AccordionHeader = styled(Flex)`
  padding: ${spacing?.padding?.p1} ${spacing?.padding?.p2};
  border-bottom: ${strokes?.s0} solid ${color?.foreground};
  height: fit-content;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionBody = styled(Flex)`
  margin-top: ${spacing?.padding?.p2};
  overflow: hidden;
  transition: min-height 0.3s ease;
`;

export const AccordionShowIcon = styled(LMAsset)<{ rotated: boolean }>`
  transform: ${({ rotated }) => (rotated ? "rotate(90deg)" : "rotate(0deg)")};
  transition: transform 1s ease;
  transform-origin: center;
  cursor: pointer;
`;

export const AccordionButton = styled.button`
  all: unset;
  cursor: pointer;
`