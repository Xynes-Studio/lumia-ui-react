## Description
The `Tabs` component is a versatile UI element used for navigation or switching between different views or content sections. It supports horizontal and vertical orientations, custom icons, labels, and different selection styles. This component can be used to enhance the user experience by organizing content in a structured and easily accessible manner.

## Use Case
The `Tabs` component is ideal for:
- Navigating between different sections of a single-page application.
- Switching between various views or data sets within a page.
- Creating a tabbed interface for content that needs to be categorized or segmented.

## Props Table

| Prop Name    | Type                                         | Description                                                        | Default Value     | Required |
|--------------|----------------------------------------------|--------------------------------------------------------------------|-------------------|----------|
| `direction`  | `"horizontal" \| "vertical"`                 | Defines the direction of the tabs.                                  | `"horizontal"`    | No       |
| `selectType` | `"select-100" \| "select-200" \| "select-300"`| Defines the selection style of the tabs.                            | `"select-100"`    | No       |
| `label`      | `string`                                     | The text label to be displayed inside the tab.                      | `undefined`       | No       |
| `icon`       | `React.FC<AssetProps>`                       | The icon to be displayed inside the tab.                            | `undefined`       | No       |
| `selected`   | `boolean`                                    | Whether the tab is currently selected.                              | `false`           | No       |
| `color`      | `string`                                     | The color of the text and icon inside the tab.                      | `undefined`       | No       |
| `iconSize`   | `number`                                     | The size of the icon inside the tab.                                | `0.7`             | No       |
| `disabled`   | `boolean`                                    | Whether the tab is disabled.                                        | `false`           | No       |
| `onClick`    | `() => void`                                  | Callback function to be called when the tab is clicked.             | `undefined`       | No       |

## Example Use Case

### Example 1: Horizontal Tabs
A set of horizontal tabs for navigating between different sections.
```jsx
<Tabs
  label="Home"
  icon={HomeIcon}
  selected={true}
  onClick={() => console.log('Home clicked')}
/>
<Tabs
  label="Profile"
  icon={ProfileIcon}
  onClick={() => console.log('Profile clicked')}
/>
<Tabs
  label="Settings"
  icon={SettingsIcon}
  onClick={() => console.log('Settings clicked')}
/>
```