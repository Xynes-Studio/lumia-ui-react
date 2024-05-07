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
