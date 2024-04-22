import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./searchInput";

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
