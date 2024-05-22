import React, { forwardRef } from "react";
import {
    PrismChildrenActionButton,
  PrismChildrenContainer,
  PrismChildrenHeader,
  PrismChildrenSection,
  PrismContainer,
  PrismNavigationContainer,
  PrismNavigationFooter,
  PrismNavigationHeader,
  PrismNavigationItemsContainer,
  PrismSearch,
} from "./prism.styles";
import { PrismLayoutProps } from "./prism.types";

const PrismLayoutComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  PrismLayoutProps
> = ({ children }) => {
  return (
    <PrismContainer>
      {/**Navigation Container */}
      {/**Navigation Container */}
      <PrismNavigationContainer>
        {/**Header */}
        <PrismNavigationHeader></PrismNavigationHeader>
        {/**Header */}
        <PrismNavigationItemsContainer></PrismNavigationItemsContainer>
        {/**Footer */}
        <PrismNavigationFooter></PrismNavigationFooter>
        {/**Footer */}
      </PrismNavigationContainer>
      {/**Navigation Container */}
      {/**Navigation Container */}

      {/**Children Container */}
      {/**Children Container */}
      <PrismChildrenContainer>
        {/**Header */}
        <PrismChildrenHeader>
          <PrismSearch placeholder="Search Here..."/>
          <PrismChildrenActionButton label="Create"/>
        </PrismChildrenHeader>
        {/**Header */}
        <PrismChildrenSection>{children}</PrismChildrenSection>
      </PrismChildrenContainer>
      {/**Children Container */}
      {/**Children Container */}
    </PrismContainer>
  );
};

export const PrismLayout = forwardRef(PrismLayoutComponent);
