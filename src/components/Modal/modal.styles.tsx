// Link.styles.ts
import { Flex } from "@app/View";
import { breakpoint, color, shadow, spacing } from "@shared/styles";
import { hexToRGBA } from "@utils/hexToRgba";
// import { color } from '@shared/styles';
import styled from "styled-components";

export const BasicStyledModal = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  background-color: ${hexToRGBA(color.foreground,0.5)};
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const StyledModalContent = styled(Flex)`
  position: relative;
  background-color: ${color.foregroundInverse};
  padding: ${spacing.padding.p1};
  box-shadow: ${shadow};
  border-radius: ${spacing.borderRadius.r1};
  max-width: 70%;
  max-height: 80%;
  @media (min-width: ${breakpoint / 2}px) {
    max-width: 90%;
    min-width: 90%;
  }
  @media (min-width: ${breakpoint * 1}px) {
    max-width: 80%;
    min-width: 40%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    max-width: 60%;
    min-width: 40%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    max-width: 40%;
    min-width: 30%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    max-width: 30%;
    min-width: 20%;
  }
`;
export const StyledCloseBtn = styled.button`
  all:unset;
  cursor: pointer;
`;
export const StyledHeader=styled(Flex)`
  width: 100%;
  justify-content: space-between;

`;
export const StyledBasicModalFooter = styled(Flex)`
  gap: 10px;
  margin: 10px;
`;
export const ScrollDiv =styled.div`
  max-height: 70dvh;
  overflow-y: auto;
`;
export const StyledModalChildrenContainer= styled(Flex)`
  
`;