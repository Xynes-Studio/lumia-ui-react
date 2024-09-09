## Description
The `Checkbox` component is a customizable UI element used to capture user input in the form of a boolean value. It supports indeterminate states, custom labels, and callback functions for change events. The component is designed to be easily integrated into forms and other interactive parts of an application.

## Use Case
The `Checkbox` component is ideal for:
- Capturing user agreement (e.g., terms and conditions).
- Toggling settings on or off.
- Selecting multiple items from a list.
- Displaying an indeterminate state for partially selected groups.

## Props Table

| Prop Name          | Type                           | Description                                                        | Default Value     | Required |
|--------------------|--------------------------------|--------------------------------------------------------------------|-------------------|----------|
| `label`            | `string`                       | The text label to be displayed next to the checkbox.               | `undefined`       | No       |
| `showIndeterminate`| `boolean`                      | Whether to display the checkbox in an indeterminate state.         | `false`           | No       |
| `onUpdate`         | `(value: boolean) => void`     | Callback function to be called when the checkbox state changes.    | `undefined`       | No       |
| `value`            | `boolean`                      | The initial checked state of the checkbox.                         | `false`           | No       |
| `disabled`         | `boolean`                      | Whether the checkbox is disabled.                                  | `undefined`       | No       |

## Example Use Case

### Example 1: Simple Checkbox
A simple checkbox to accept terms and conditions.
```jsx
<Checkbox
  label="I agree to the terms and conditions"
  onUpdate={(value) => console.log(value)}
/>
```
