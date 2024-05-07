// datatable.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./datatable";
import { DataTableProps } from "./datatable.types";
import { ListViewProps } from "@app/View/ListView/listView.types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  argTypes: {
    onClickRow: { action: "onClickRow" },
  },
} satisfies Meta<DataTableProps<ListViewProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleData: object[] = [
  { id: 1, name: "John Doe", age: 28 },
  { id: 2, name: "Jane Doe", age: 26 },
  { id: 3, name: "Jack Doe", age: 30 },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultDataTable: Story = {
  args: {
    dataset: sampleData,
    headerLabels: ["ID", "Name", "Age"],
    pagination: true,
    paginationType: "default",
    rowStyleTypes: "outline",
  },
};

export const InfiniteScrollDataTable: Story = {
  args: {
    dataset: sampleData,
    headerLabels: ["ID", "Name", "Age"],
    pagination: true,
    paginationType: "infinite-loading",
    rowStyleTypes: "alternative-fill",
  },
};
