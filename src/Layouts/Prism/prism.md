## Description
The `PrismLayout` component is a comprehensive layout component designed to manage the navigation, settings, notifications, and content sections of an application. It includes customizable tabs, search functionality, and integrates with horizontal modals for displaying notifications and settings.

## Use Case
The `PrismLayout` component is ideal for:
- Creating a structured layout for applications with multiple sections.
- Managing navigation between different tabs or sections.
- Integrating notifications and settings modals within the layout.

## Props Table

### PrismLayoutProps

| Prop Name                     | Type                                      | Description                                                        | Default Value            | Required |
|-------------------------------|-------------------------------------------|--------------------------------------------------------------------|--------------------------|----------|
| `showNotifications`           | `boolean`                                 | Whether to show the notifications icon.                            | `false`                  | No       |
| `showSettingIcon`             | `boolean`                                 | Whether to show the settings icon.                                 | `false`                  | No       |
| `logo`                        | `string`                                  | URL of the logo to be displayed in the header.                     | `undefined`              | No       |
| `settingComponent`            | `React.FC`                                | Component to be displayed in the settings modal.                   | `undefined`              | No       |
| `notificationComponent`       | `React.FC`                                | Component to be displayed in the notifications modal.              | `undefined`              | No       |
| `notificationCount`           | `number`                                  | Number of unread notifications.                                    | `0`                      | No       |
| `navigationFooterComponent`   | `React.FC`                                | Component to be displayed in the navigation footer.                | `undefined`              | No       |
| `tabsData`                    | `PrismLayoutTab[]`                        | Array of tab data objects.                                         | `undefined`              | No       |
| `onTabClick`                  | `(tab: PrismLayoutTab) => void`           | Callback function when a tab is clicked.                           | `undefined`              | No       |
| `handleSearch`                | `(value: string) => void`                 | Callback function when the search value changes.                   | `undefined`              | No       |
| `SearchResultsComponent`      | `React.FC<SearchResultProps>`             | Component to be displayed for search results.                      | `undefined`              | No       |
| `searchPlaceholder`           | `string`                                  | Placeholder text for the search input.                             | `"Search Here..."`       | No       |

### PrismLayoutTab

| Prop Name            | Type                           | Description                                                        | Default Value   | Required |
|----------------------|--------------------------------|--------------------------------------------------------------------|-----------------|----------|
| `id`                 | `number`                       | Unique identifier for the tab.                                     | `undefined`     | Yes      |
| `icon`               | `React.FC<AssetProps>`         | Icon to be displayed in the tab.                                   | `undefined`     | Yes      |
| `title`              | `string`                       | Title of the tab.                                                  | `undefined`     | Yes      |
| `selected`           | `boolean`                      | Whether the tab is currently selected.                             | `false`         | No       |
| `component`          | `ReactNode`                    | Component to be displayed when the tab is selected.                | `undefined`     | No       |
| `disabled`           | `boolean`                      | Whether the tab is disabled.                                       | `false`         | No       |
| `actionButtonEnabled`| `boolean`                      | Whether the action button is enabled for the tab.                  | `false`         | No       |
| `actionModalComponent`| `ReactNode`                   | Component to be displayed in the action modal for the tab.         | `undefined`     | No       |

## Example Use Case

### Example 1: Basic PrismLayout
A basic layout with tabs and notifications enabled.
```jsx
import React from 'react';
import { PrismLayout } from './PrismLayout';

const tabsData = [
  { id: 1, icon: IconComponent1, title: "Home", component: <HomeComponent /> },
  { id: 2, icon: IconComponent2, title: "Profile", component: <ProfileComponent /> }
];

const App = () => (
  <PrismLayout
    logo="https://example.com/logo.png"
    showNotifications={true}
    showSettingIcon={true}
    tabsData={tabsData}
  />
);

export default App;
```