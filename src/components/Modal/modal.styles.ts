import { Flex } from "@app/View";
import { hexToRGBA } from "@utils/hexToRgba";
import styled from "styled-components";

export const StyledModal = styled(Flex)<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "flex !important" : "none !important")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  background-color: ${({ theme }) => hexToRGBA(theme.color.foreground, 0.5)};
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const StyledModalContent = styled(Flex)`
  position: relative;
  background-color: ${({ theme }) => theme.color.foregroundInverse};
  padding: ${({ theme }) => theme.spacing.padding.p1};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.r1};
  max-width: 70%;
  max-height: 80%;
  @media (min-width: ${({ theme }) => theme.breakpoint / 2}px) {
    max-width: 90%;
    min-width: 90%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint * 1}px) {
    max-width: 80%;
    min-width: 40%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint * 2}px) {
    max-width: 60%;
    min-width: 40%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint * 3}px) {
    max-width: 40%;
    min-width: 30%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint * 4}px) {
    max-width: 30%;
    min-width: 20%;
  }
`;

export const StyledCloseBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

export const StyledHeader = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`;

export const StyledModalFooter = styled(Flex)<{ actionBtnAlign: string }>`
  justify-content: ${(props) => props.actionBtnAlign};
  gap: 10px;
  margin: 10px;
`;

export const ScrollDiv = styled.div`
  max-height: 70dvh;
  overflow-y: auto;
`;

export const StyledModalChildrenContainer = styled(Flex)``;
