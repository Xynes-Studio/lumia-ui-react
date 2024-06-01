## Description
The `Ticker` component is a customizable scrolling ticker used to display continuous information, such as news headlines or stock prices. It supports various settings like speed, direction, delay, background color, and whether the ticker should stop on hover. This component is ideal for applications requiring a scrolling text or marquee effect.

## Use Case
The `Ticker` component is ideal for:
- Displaying continuous news headlines or updates.
- Showing stock prices or financial data.
- Any scenario where a scrolling text effect is needed.

## Props Table

| Prop Name       | Type                                      | Description                                                        | Default Value          | Required |
|-----------------|-------------------------------------------|--------------------------------------------------------------------|------------------------|----------|
| `stopOnHover`   | `boolean`                                 | Whether the ticker should stop scrolling when hovered over.        | `false`                | No       |
| `backgroundColor`| `string`                                 | The background color of the ticker.                                | `hexToRGBA(color.foreground, 0)` | No       |
| `speed`         | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 20 \| 30 \| 40 \| 50` | The speed of the scrolling text.                                   | `10`                   | No       |
| `delay`         | `number`                                  | The delay before the ticker starts scrolling.                      | `0`                    | No       |
| `direction`     | `"normal" \| "reverse" \| "alternate" \| "alternate-reverse"` | The direction of the scrolling text.                               | `"normal"`             | No       |
| `loop`          | `boolean`                                 | Whether the ticker should loop continuously.                       | `true`                 | No       |

## Example Use Case

### Example 1: Basic Ticker
A basic ticker displaying continuous text.
```jsx
<Ticker>
  Breaking News: This is an example of a basic ticker.
</Ticker>
```