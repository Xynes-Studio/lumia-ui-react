## Description
The typography components provide a set of styled text elements for your application, including various heading levels (`H1` to `H6`), `Text`, `bold`, `underline`, and `italic` elements. These components support customization options such as type, number of lines, text case, and editable content.

## Use Case
These components are ideal for:
- Structuring content with appropriate heading levels.
- Styling text with different formats like bold, underline, and italic.
- Displaying body text, captions, and error messages.
- Providing editable text elements for user-generated content.

## Props Table

### HeaderProps

| Prop Name        | Type                                      | Description                                                         | Default Value  | Required |
|------------------|-------------------------------------------|---------------------------------------------------------------------|----------------|----------|
| `type`           | `"sans" \| "serif"`                       | The font type for the heading.                                      | `"sans"`       | No       |
| `numberOfLines`  | `number`                                   | The maximum number of lines to display.                             | `undefined`    | No       |
| `editable`       | `boolean`                                  | Whether the heading is editable.                                    | `false`        | No       |
| `onUpdate`       | `(value: string) => void`                 | Callback function when the heading content is updated.              | `undefined`    | No       |

### TextProps

| Prop Name        | Type                                      | Description                                                         | Default Value  | Required |
|------------------|-------------------------------------------|---------------------------------------------------------------------|----------------|----------|
| `type`           | `"error" \| "body" \| "caption"`          | The type of text to display.                                        | `"body"`       | No       |
| `textCase`       | `"none" \| "capitalize" \| "uppercase" \| "lowercase" \| "initial" \| "inherit"` | The case transformation for the text. | `"none"`       | No       |
| `editable`       | `boolean`                                  | Whether the text is editable.                                       | `false`        | No       |
| `codeClassName`  | `string`                                   | Additional class name for code blocks within the text.               | `undefined`    | No       |
| `numberOfLines`  | `number`                                   | The maximum number of lines to display.                             | `undefined`    | No       |
| `onUpdate`       | `(value: string) => void`                 | Callback function when the text content is updated.                 | `undefined`    | No       |

## Example Use Case

### Example 1: Using Headings
Using different heading levels and types.
```jsx
import React from 'react';
import { H1, H2, H3, H4, H5, H6 } from './typography';

const TypographyExample = () => (
  <div>
    <H1 type="serif">Heading 1</H1>
    <H2 type="sans">Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
    <H6>Heading 6</H6>
  </div>
);

export default TypographyExample;
```