import type { Meta, StoryObj } from "@storybook/react";
import { H6 } from "./H6";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Texts/H6",
  component: H6,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof H6>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sans: Story = {
  args: {
    type: "sans",
    children: "This is header four.",
  },
};

export const Serif: Story = {
  args: {
    type: "serif",
    children: "This is header four.",
  },
};
export const Editable: Story = {
  args: {
    type: "serif",
    children: "This is header four which is editable.",
    editable: true,
  },
};
