import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "..";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: "Another description, overriding the comments",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    type: "default",
    showIcon: true,
    title: "This is an alert",
    description: "Description for the alert",
  },
};
export const Flat: Story = {
  args: {
    type: "flat",
    showIcon: true,
    title: "This is a flat alert",
    description: "Description for the flat alert",
  },
};
export const Outlined: Story = {
  args: {
    type: "outlined",
    showIcon: false,
    title: "This is a Outlined alert",
    description: "Description for the outlined alert",
    actionBtn: true,
    actionBtnLabel: "Action",
  },
};
