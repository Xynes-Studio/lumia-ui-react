## Description
The `Switch` component is a customizable toggle switch used for enabling or disabling options. It supports labels, active and inactive colors, and can handle state changes through a toggle function. This component is ideal for settings or any scenario where a binary choice needs to be made.

## Use Case
The `Switch` component is ideal for:
- Toggling settings or preferences on or off.
- Creating binary choices in forms.
- Implementing on/off switches for features.

## Props Table

| Prop Name     | Type                                       | Description                                                        | Default Value            | Required |
|---------------|--------------------------------------------|--------------------------------------------------------------------|--------------------------|----------|
| `label`       | `string`                                   | The label to be displayed next to the switch.                      | `undefined`              | No       |
| `activeColor` | `string`                                   | The color of the switch when it is active.                         | `color.accent100`        | No       |
| `inactiveColor`| `string`                                  | The color of the switch when it is inactive.                       | `color.foregroundInverse300` | No       |
| `value`       | `boolean`                                  | The current value of the switch.                                   | `false`                  | Yes      |
| `onToggle`    | `(value: boolean) => void`                 | Callback function to be called when the switch value changes.      | `undefined`              | No       |

## Example Use Case

### Example 1: Basic Switch
A basic switch with a label.
```jsx
<Switch
  label="Enable Notifications"
  value={true}
  onToggle={(newValue) => console.log("Switch toggled:", newValue)}
/>
```