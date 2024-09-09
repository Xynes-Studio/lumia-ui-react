## Description
The `Flex` component is a versatile layout component that utilizes CSS flexbox to arrange its children. It supports various flex properties such as direction, wrapping, and flexible weights for child elements.

## Use Case
This component is ideal for:
- Creating flexible and responsive layouts.
- Aligning and distributing space among items in a container.
- Building complex grid systems using flex properties.

## Props Table

| Prop Name | Type | Description | Default Value | Required |
|-----------|------|-------------|---------------|----------|
| `direction` | `"row" \| "column" \| "row-reverse" \| "column-reverse"` | Defines the direction of the flex container's main axis. | `"row"` | No |
| `weight` | `number[]` | An array of numbers defining the flex-grow values for each child element. The number of elements in the array must match the number of children. | `undefined` | No |
| `wrap` | `boolean` | Determines whether the flex container's children should wrap onto multiple lines. | `false` | No |
| `maxRow` | `number` | The maximum number of rows. (Not used in the current implementation but included for extensibility.) | `undefined` | No |

## Example

```typescript
import React from "react";
import { Flex } from "./Flex";

const App: React.FC = () => {
  return (
    <Flex direction="row" weight={[1, 2, 1]} wrap={true} className="customClass">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  );
};

export default App;
```
