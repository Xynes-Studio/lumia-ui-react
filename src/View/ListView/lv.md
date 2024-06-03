## Description
The `ListView` component is a flexible container for rendering lists of items. It supports horizontal and vertical orientations, and allows for custom headers and footers. The component utilizes a render prop pattern for rendering each item in the list, providing maximum flexibility.

## Use Case
This component is ideal for:
- Rendering lists of data with custom item components.
- Displaying lists in either horizontal or vertical orientation.
- Adding custom headers and footers to lists.

## Props Table

| Prop Name                   | Type                                                          | Description                                                                 | Default Value | Required |
|-----------------------------|---------------------------------------------------------------|-----------------------------------------------------------------------------|---------------|----------|
| `dataset`                   | `T[]`                                                         | The array of data items to be displayed in the list.                        | N/A           | Yes      |
| `renderItem`                | `(item: T, index: number) => React.JSX.Element`               | A function that returns the JSX element for each item in the list.          | `undefined`   | No       |
| `header`                    | `React.JSX.Element`                                           | A custom header element to be displayed at the top of the list.             | `undefined`   | No       |
| `footer`                    | `React.JSX.Element`                                           | A custom footer element to be displayed at the bottom of the list.          | `undefined`   | No       |
| `horizontal`                | `boolean`                                                     | If `true`, the list is displayed horizontally.                              | `false`       | No       |
| `ListHeaderComponentStyle`  | `CSSProperties`                                               | Custom styles for the header component.                                     | `undefined`   | No       |
| `ListFooterComponentStyle`  | `CSSProperties`                                               | Custom styles for the footer component.                                     | `undefined`   | No       |

## Example

```typescript
import React from "react";
import ListView from "./ListView";

const dataset = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const renderItem = (item: { id: number; name: string }, index: number) => (
  <div key={item.id}>
    {item.name}
  </div>
);

const App: React.FC = () => {
  return (
    <ListView
      dataset={dataset}
      renderItem={renderItem}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      horizontal={true}
    />
  );
};

export default App;
```
