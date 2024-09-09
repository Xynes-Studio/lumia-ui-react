import type { Meta, StoryObj } from "@storybook/react";
import ListView from "./listView";
import { Row } from "..";
import { Text } from "@texts/index";

// Define meta information for the ListView component
const meta: Meta<typeof ListView> = {
  title: "View/ListView",
  component: ListView,
  // Optional: Include argTypes if you want to specify properties that control the behavior in the UI
  tags: ["autodocs"],
};
export default meta;

// Type for stories using StoryObj
type Story = StoryObj<typeof meta>;

// Type definition for the items used in ListView
interface ListItem {
  id: number;
  content: string;
}

// Sample data to populate the ListView
const sampleData: ListItem[] = [
  { id: 1, content: "First item" },
  { id: 2, content: "Second item" },
  { id: 3, content: "Third item" },
];

// Default story
export const Default: Story = {
  args: {
    dataset: sampleData,
    renderItem: (item: ListItem) => (
      <Row>
        <Text>{item.id}</Text> <Text>{item.content}</Text>
      </Row>
    ),
  },
};

// Horizontal story variation
export const Horizontal: Story = {
  args: {
    dataset: sampleData,
    renderItem: (item: ListItem) => (
      <Row>
        <Text>{item.id}</Text> <Text>{item.content}</Text>
      </Row>
    ),
    header: <div>Header Content</div>,
    footer: <div>Footer Content</div>,
    horizontal: true,
  },
};
