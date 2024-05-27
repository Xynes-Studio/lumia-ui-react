import { SearchResultProps } from "@components/Inputs/SearchInput/components/searchResults/searchResults.types";
import { AssetProps } from "@icons/types/asset.types";
import React, { ReactNode } from "react";

export interface PrismLayoutTab {
  id: number;
  icon: React.FC<AssetProps>;
  title: string;
  selected?: boolean;
  component?: ReactNode;
  disabled?: boolean;
}

export interface PrismLayoutProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  showNotifications?: boolean;
  showSettingIcon?: boolean;
  logo?: string;
  settingComponent?: React.ReactNode;
  notificationComponent?: React.ReactNode;
  notificationCount?: number;
  tabsData?: PrismLayoutTab[];
  onTabClick?: (tab: PrismLayoutTab) => void;
  handleSearch?:(value: string) => void;
  SearchResultsComponent?: React.FC<SearchResultProps>;
  searchPlaceholder?: string;
}
