import { Flex } from "@app/View";
import { Button, SearchInput } from "@components/index";
import { background, color, spacing } from "@shared/styles";
import { hexToRGBA } from "@utils/hexToRgba";
import styled from "styled-components";

export const PrismContainer = styled(Flex)`
  width: 100dvw;
  height: 100dvh;
`;

export const PrismNavigationContainer = styled(Flex)`
  position: relative;
  width: 20%;
  height: 100%;
  background-color: ${color.foregroundInverse400};
  align-items: center;
  flex-direction: column !important;
`;

export const PrismNavigationHeader = styled(Flex)`
  position: relative;
  width: 90%;
  height: 10%;
  margin: ${spacing.padding.p3} auto;
  justify-content: space-between;
`;
export const PrismHeaderLogo = styled.img`
  height: 50%;
  object-fit: contain;
  margin-right: ${spacing.padding.p1};
`;

export const PrismNavigationHeaderActions = styled(Flex)`
`;
export const PrismNavigationHeaderActionButtons = styled(Button)`
  height: 2rem;
  background-color: ${hexToRGBA(color.foreground, 0.2)} !important;
  margin-left: ${spacing.padding.p1};
`;

export const PrismNavigationItemsContainer = styled.div`
  position: relative;
  width: 90%;
  flex: 1;
`;

export const PrismNavigationItems = styled(Flex)`
`;

export const PrismNavigationFooter = styled(Flex)`
  position: relative;
  width: 90%;
  height: 10%;
  margin: ${spacing.padding.p3} auto;
`;

export const PrismChildrenContainer = styled(Flex)`
  position: relative;
  flex: 1;
  height: 100%;
  background-color: ${background.app};
  flex-direction: column !important;
`;

export const PrismChildrenHeader = styled(Flex)`
  position: relative;
  width: 100%;
  padding: 0px 1.25rem;
  height: 10%;
  background-color: ${color.foregroundInverse300};
  align-items: center;
  justify-content: space-between;
  z-index: 99;
`;

export const PrismSearch = styled(SearchInput)`
  width: 20rem;
`;
export const PrismChildrenActionButton = styled(Button)`
`;

export const PrismChildrenSection = styled.div`
  flex: 1;
  width: 100%;
`;
