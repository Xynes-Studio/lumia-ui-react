// datatable.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./datatable";
import { DataTableProps, DataTableItemType } from "./datatable.types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "View/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  argTypes: {
    onClickRow: { action: "onClickRow" },
  },
} satisfies Meta<DataTableProps<DataTableItemType>>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleData: DataTableItemType[] = [
  { id: 1, name: "John Doe", age: 28 },
  { id: 2, name: "Jane Doe", age: 26 },
  { id: 3, name: "Jack Doe", age: 30 },
  { id: 4, name: "Jill Smith", age: 32 },
  { id: 5, name: "Sam Black", age: 24 },
  { id: 6, name: "Sue Green", age: 27 },
  { id: 7, name: "Chris Brown", age: 35 },
  { id: 8, name: "Alex White", age: 31 },
  { id: 9, name: "Taylor Blue", age: 29 },
  { id: 10, name: "Jordan Grey", age: 33 },
  { id: 11, name: "Morgan Silver", age: 34 },
  { id: 12, name: "Jamie Gold", age: 28 },
  { id: 13, name: "Casey Red", age: 27 },
  { id: 14, name: "Riley Orange", age: 26 },
  { id: 15, name: "Quinn Purple", age: 30 },
  { id: 16, name: "Casey Yellow", age: 32 },
  { id: 17, name: "Charlie Pink", age: 29 },
  { id: 18, name: "Drew Violet", age: 31 },
  { id: 19, name: "Taylor Crimson", age: 34 },
  { id: 20, name: "Jordan Indigo", age: 28 },
];

const headerLabels = ["ID", "Name", "Age"];

export const DefaultDataTable: Story = {
  args: {
    dataset: sampleData,
    headerLabels: headerLabels,
    pagination: true,
    paginationType: "default",
    rowStyleTypes: "outline",
  },
};

export const InfiniteScrollDataTable: Story = {
  args: {
    dataset: sampleData,
    headerLabels: headerLabels,
    pagination: true,
    paginationType: "infinite-loading",
    rowStyleTypes: "alternative-fill",
  },
};
