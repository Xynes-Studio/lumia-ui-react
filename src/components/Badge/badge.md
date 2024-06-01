## Description
The `Badge` component is a highly customizable UI element used to display labels, counts, or statuses. It supports different shapes (round and square) and styles (filled or outlined). The component can be configured with various colors for both text and background, making it suitable for a wide range of use cases.

## Use Case
The `Badge` component is ideal for displaying:
- Notification counts (e.g., unread messages).
- Status indicators (e.g., online/offline status).
- Labels or tags for categorization.
- Any other brief, prominent information that needs to be highlighted.

## Props Table

| Prop Name        | Type                                    | Description                                                         | Default Value             | Required |
|------------------|-----------------------------------------|---------------------------------------------------------------------|---------------------------|----------|
| `type`           | `"round" \| "square-fill" \| "square-outlined"` | Defines the shape and style of the badge.                            | `"square-fill"`           | No       |
| `label`          | `number \| string`                      | The content to be displayed inside the badge.                        | `undefined`               | Yes      |
| `color`          | `string`                                | The color of the text inside the badge.                              | `globalColor?.foreground` | No       |
| `backgroundColor`| `string`                                | The background color of the badge.                                   | `globalColor?.accent100`  | No       |

## Example Use Case

**Round Badge:**
- To display a count of unread notifications, use a round badge with a numeric label. If the count exceeds 9, it will display "9+".

**Square Badge:**
- To display a status label like "New" or "Sale", use a square badge with a string label. This can be filled or outlined based on the type.

## Component Props

| Prop Name        | Type                                    | Description                                                         | Default Value             | Required |
|------------------|-----------------------------------------|---------------------------------------------------------------------|---------------------------|----------|
| `type`           | `"round" \| "square-fill" \| "square-outlined"` | Defines the shape and style of the badge.                            | `"square-fill"`           | No       |
| `label`          | `number \| string`                      | The content to be displayed inside the badge.                        | `undefined`               | Yes      |
| `color`          | `string`                                | The color of the text inside the badge.                              | `globalColor?.foreground` | No       |
| `backgroundColor`| `string`                                | The background color of the badge.                                   | `globalColor?.accent100`  | No       |

## Usage Example

**Round Badge:**
```jsx
<Badge type="round" label={5} />
```
