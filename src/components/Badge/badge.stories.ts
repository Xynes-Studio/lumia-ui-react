import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/Badge",
  component: Badge,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Round: Story = {
  args: {
    type: "round",
    label: 6,
    backgroundColor: "#00FFB2",
    color: "black",
  },
};

export const SquareFill: Story = {
  args: {
    type: "square-fill",
    label: "Badge",
    backgroundColor: "#00FFB2",
    color: "black",
  },
};

export const SquareOutlined: Story = {
  args: {
    type: "square-outlined",
    label: "badge",
    backgroundColor: "#00FFB2",
    color: "black",
  },
};
