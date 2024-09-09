# DataTable Component Documentation

## Description
The `DataTable` component is a versatile and customizable table component designed for displaying tabular data. It supports features such as pagination, search functionality, and row click handling, making it suitable for a wide range of applications where data needs to be presented in a tabular format.

## Use Case
This component is ideal for:
- Displaying lists of items in a tabular format.
- Providing search functionality to filter data.
- Enabling pagination to navigate through large datasets.
- Handling row clicks for interactive data tables.

## Props Table

| Prop Name          | Type                                                       | Description                                                                 | Default Value          | Required |
|--------------------|------------------------------------------------------------|-----------------------------------------------------------------------------|------------------------|----------|
| `dataset`          | `T[]`                                                      | The array of data items to be displayed in the table. Each item should be an object with key-value pairs representing columns and their values. | N/A                    | Yes      |
| `headerLabels`     | `string[]`                                                 | An array of strings representing the labels for the table headers.          | `undefined`            | No       |
| `pagination`       | `boolean`                                                  | A boolean indicating whether pagination is enabled.                         | `true`                 | No       |
| `paginationType`   | `"infinite-loading" \| "default"`                          | The type of pagination to be used (`"infinite-loading"` or `"default"`).    | `"default"`            | No       |
| `onClickRow`       | `(label: string, index: number) => void`                   | Callback function to handle row clicks. Receives the label and index of the clicked row as parameters. | `undefined`            | No       |
| `numberOfRows`     | `number`                                                   | The number of rows to display per page.                                     | `10`                   | No       |
| `rowStyleTypes`    | `"transparent" \| "outline" \| "alternative-fill"`         | The style type for rows.                                                    | `"transparent"`        | No       |
| `searchBarPosition`| `"start" \| "center" \| "end"`                             | The position of the search bar.                                             | `"end"`                | No       |

## Example

```typescript
import React from "react";
import DataTable from "./DataTable";
import { DataTableItemType } from "./datatable.types";

const dataset: DataTableItemType[] = [
  { name: "John Doe", age: 30, email: "john@example.com" },
  { name: "Jane Smith", age: 25, email: "jane@example.com" },
  // ...more data items
];

const headerLabels = ["Name", "Age", "Email"];

const App: React.FC = () => {
  const handleRowClick = (label: string, index: number) => {
    console.log(`Clicked row with label ${label} at index ${index}`);
  };

  return (
    <DataTable
      dataset={dataset}
      headerLabels={headerLabels}
      onClickRow={handleRowClick}
    />
  );
};

export default App;
```
