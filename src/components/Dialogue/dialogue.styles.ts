import { Flex } from "@app/View";
import { color, shadow, spacing } from "@shared/styles";
import { hexToRGBA } from "@utils/hexToRgba";
import styled from "styled-components";

export const StyledDialogue = styled(Flex)<{ visible: boolean }>`
  display: ${(props) =>
    props.visible ? "flex !important" : "none !important"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  background-color: ${hexToRGBA(color.foreground, 0.5)};
  justify-content: center;
  align-items: bottom;
  z-index: 99;
`;

export const StyledDialogueContent = styled(Flex)`
  position: relative;
  background-color: ${color.foregroundInverse};
  padding: ${spacing.padding.p1};
  box-shadow: ${shadow};
  border-top-left-radius: ${spacing.borderRadius.r2};
  border-top-right-radius: ${spacing.borderRadius.r2};
  max-width: 100%;
  width: 100%;
  max-height: 80%;
  align-self: flex-end;
`;
export const StyledCloseBtn = styled.button`
  all: unset;
  cursor: pointer;
`;
export const StyledHeader = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`;
export const StyledDialogueFooter = styled(Flex)`
  gap: ${spacing.padding.p0};
  margin: ${spacing.padding.p0};
  justify-content: "center";
`;
export const ScrollDiv = styled.div`
  max-height: 70dvh;
  overflow-y: auto;
`;
export const StyledDialogueChildrenContainer = styled(Flex)``;

export const AlignDiv = styled.div<{ contentAlign: string }>`
  text-align: ${(props) => props.contentAlign};
`;
