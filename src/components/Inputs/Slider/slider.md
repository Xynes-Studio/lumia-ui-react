## Description
The `Slider` component is a customizable UI element used for selecting a value from a range. It supports different styles, customizable colors, and can display the selected value as a percentage. This component is ideal for applications requiring user input for adjustable settings or preferences.

## Use Case
The `Slider` component is ideal for:
- Adjusting settings such as volume, brightness, or other preferences.
- Selecting a value from a range in forms or settings pages.
- Providing a visual representation of progress or value selection.

## Props Table

| Prop Name        | Type                                     | Description                                                         | Default Value                   | Required |
|------------------|------------------------------------------|---------------------------------------------------------------------|---------------------------------|----------|
| `type`           | `"slide" \| "progress"`                  | Defines the style of the slider.                                    | `"slide"`                       | No       |
| `onChange`       | `(event: React.ChangeEvent<HTMLInputElement>) => void` | Callback function to be called when the slider value changes.       | `undefined`                     | No       |
| `value`          | `number`                                 | The current value of the slider.                                    | `0`                             | Yes      |
| `showPercentage` | `boolean`                                | Whether to display the value as a percentage next to the slider.     | `false`                         | No       |
| `label`          | `string`                                 | The label to be displayed above the slider.                         | `undefined`                     | No       |
| `progressColor`  | `string`                                 | The color of the progress bar in the slider.                        | `color?.accent100`              | No       |
| `backgroundColor`| `string`                                 | The background color of the slider.                                 | `color?.foregroundInverse300`   | No       |

## Example Use Case

### Example 1: Basic Slider
A basic slider to adjust a value.
```jsx
<Slider
  value={50}
  onChange={(e) => console.log(e.target.value)}
/>
```