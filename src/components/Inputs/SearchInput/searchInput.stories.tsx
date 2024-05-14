import { Row } from "@app/View";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./searchInput";
import { Text } from "@texts/index";
interface ListItem {
  id: number;
  content: string;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/SearchInput",
  component: SearchInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultSearch: Story = {
  args: {
    type: "default",
    inputType: "search",
    label: "Search Here:",
    placeholder: "Search",
  },
};

const sampleData: ListItem[] = [
  { id: 1, content: "First item" },
  { id: 2, content: "Second item" },
  { id: 3, content: "Third item" },
];

export const SearchWithResults: Story = {
  args: {
    type: "default",
    inputType: "search",
    label: "Search Here:",
    placeholder: "Search",
    dataset: sampleData,
    suggestions: true,
    renderItem: (item: ListItem) => (
      <Row>
        <Text>{item.id}</Text> <Text>{item.content}</Text>
      </Row>
    ),
  },
};
