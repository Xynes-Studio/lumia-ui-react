"use client";
import React, { forwardRef, useState } from "react";
import {
  PrismChildrenActionButton,
  PrismChildrenContainer,
  PrismChildrenHeader,
  PrismChildrenSection,
  PrismContainer,
  PrismHeaderLogo,
  PrismNavigationContainer,
  PrismNavigationFooter,
  PrismNavigationHeader,
  PrismNavigationHeaderActionButtons,
  PrismNavigationHeaderActions,
  PrismNavigationItems,
  PrismNavigationItemsContainer,
  PrismSearch,
} from "./prism.styles";
import { PrismLayoutProps, PrismLayoutTab } from "./prism.types";
import PrismTab from "./component/prismTab";
import { LmCkSettings } from "@icons/lmCkSettings";
import { LmCkBell } from "@icons/lmCkBell";
import { useHorizontalModal } from "@app/Contexts/Modals/HorizontalModalProvider";
import PrismNotification from "./component/PrismNotification/prismNotification";

const PrismLayoutComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  PrismLayoutProps
> = ({ tabsData, ...props }, ref) => {
  const [tabsDataLocal, setTabsDataLocal] = useState(tabsData);
  const [visibleComponent, setVisibleComponent] = useState(
    tabsData && tabsData[0].component
  );
  const [searchValue, setSearchValue] = useState("");
  const { showModal, hideModal } = useHorizontalModal();

  const handleTabClick = (id: number) => {
    if (tabsDataLocal) {
      const array = [...tabsDataLocal];
      const indexOfPreviousSelectedItem = array.findIndex(
        (i: PrismLayoutTab) => i.selected === true
      );
      const index = array.findIndex((i: PrismLayoutTab) => i.id === id);

      if (index !== -1) { 
        array[index].selected = true;
        array[indexOfPreviousSelectedItem].selected = false;
        setTabsDataLocal(array);
        setVisibleComponent(array[index].component);
      }
    }
  };

  const PrismNotificationComponent: React.FC = () => {
    return <PrismNotification onClose={hideModal} />;
  };

  const handleNotificationClick = () => {
    showModal(
      props.notificationComponent || PrismNotificationComponent,
      "left"
    );
  };
  const handleSettingClick = () => {
    if (props.settingComponent) showModal(props.settingComponent, "left");
  };

  return (
    <PrismContainer ref={ref}>
      {/**Navigation Container */}
      {/**Navigation Container */}
      <PrismNavigationContainer>
        {/**Header */}
        <PrismNavigationHeader>
          {props.logo && <PrismHeaderLogo src={props.logo} alt="Layout Logo" />}
          <PrismNavigationHeaderActions>
            {props.settingComponent && (
              <PrismNavigationHeaderActionButtons
                icon={LmCkSettings}
                type="fill"
                title="Setting"
                borderRadius={100}
                onClick={handleSettingClick}
              />
            )}
            <PrismNavigationHeaderActionButtons
              icon={LmCkBell}
              type="fill"
              title="Notifications"
              borderRadius={100}
              onClick={handleNotificationClick}
            />
          </PrismNavigationHeaderActions>
        </PrismNavigationHeader>
        {/**Header */}
        <PrismNavigationItemsContainer>
          <PrismNavigationItems direction="column">
            {/**here we shall render the tabs */}
            {tabsData &&
              tabsData.map((i) => {
                return (
                  <PrismTab key={i?.id} {...i} onTabClick={handleTabClick} />
                );
              })}
          </PrismNavigationItems>
        </PrismNavigationItemsContainer>
        {/**Footer */}
        <PrismNavigationFooter>
          {props.navigationFooterComponent && (
            <props.navigationFooterComponent />
          )}
        </PrismNavigationFooter>
        {/**Footer */}
      </PrismNavigationContainer>
      {/**Navigation Container */}
      {/**Navigation Container */}

      {/**Children Container */}
      {/**Children Container */}
      <PrismChildrenContainer>
        {/**Header */}
        <PrismChildrenHeader>
          <PrismSearch
            searchString={searchValue}
            onValueChange={(value) => setSearchValue(value)}
            placeholder={props.searchPlaceholder || "Search Here..."}
          />
          <PrismChildrenActionButton label="Create" />
        </PrismChildrenHeader>
        {/**Header */}
        <PrismChildrenSection>
          {/**here we shall render the components from tab */}
          {visibleComponent}
        </PrismChildrenSection>
      </PrismChildrenContainer>
      {/**Children Container */}
      {/**Children Container */}
    </PrismContainer>
  );
};

export const PrismLayout = forwardRef(PrismLayoutComponent);
