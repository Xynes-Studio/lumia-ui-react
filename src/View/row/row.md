## Description
The `Row` component is a flexible row layout component that extends the `Flex` component to include additional styling options. It supports different style types for various use cases such as outlined borders and alternating row fills.

## Use Case
This component is ideal for:
- Rendering rows within a table or list with specific styling needs.
- Applying alternating background colors or borders to rows.
- Creating structured row layouts with flexible weights for child elements.

## Props Table

| Prop Name   | Type                                                       | Description                                                           | Default Value | Required |
|-------------|------------------------------------------------------------|-----------------------------------------------------------------------|---------------|----------|
| `styleType` | `"transparent" \| "outline" \| "alternative-fill"`         | Defines the style type for the row.                                   | `"transparent"` | No       |
| `weight`    | `number[]`                                                 | An array of numbers defining the flex-grow values for each child.     | `undefined`   | No       |
| `index`     | `number`                                                   | The index of the row, used for applying styles based on row position. | `undefined`   | No       |

## Example

```typescript
import React from "react";
import { Row } from "./Row";

const dataset = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const App: React.FC = () => {
  return (
    <div>
      {dataset.map((item, index) => (
        <Row key={item.id} styleType="alternative-fill" index={index}>
          <div>{item.name}</div>
        </Row>
      ))}
    </div>
  );
};

export default App;
```
