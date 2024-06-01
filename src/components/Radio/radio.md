## Description
The `Radio` component is a customizable UI element used for single selection from multiple options. It supports labels, checked state, and can be disabled. This component is ideal for forms or any other input scenarios where users need to select one option from a set.

## Use Case
The `Radio` component is ideal for:
- Creating single-select options in forms.
- Implementing radio button groups for surveys or questionnaires.
- Any scenario where a user needs to select one option from multiple choices.

## Props Table

| Prop Name  | Type                                      | Description                                                        | Default Value | Required |
|------------|-------------------------------------------|--------------------------------------------------------------------|---------------|----------|
| `label`    | `string`                                  | The label to be displayed next to the radio button.                | `undefined`   | No       |
| `disabled` | `boolean`                                 | Whether the radio button is disabled.                              | `false`       | No       |
| `checked`  | `boolean`                                 | Whether the radio button is checked.                               | `false`       | No       |

## Example Use Case

### Example 1: Basic Radio Button
A basic radio button with a label.
```jsx
<Radio
  label="Option 1"
  checked={true}
  onChange={(e) => console.log(e.target.checked)}
/>
```