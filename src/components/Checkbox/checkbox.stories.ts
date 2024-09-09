import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/Checkbox",
  component: Checkbox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CheckBox: Story = {
  args: {
    label: "breakfast",
    value: false,
    
  },
};
export const CheckBoxChecked: Story = {
  args: {
    label: "breakfast",
    value: true,
  },
};
export const CheckBoxIndeterminate: Story = {
  args: {
    label: "breakfast",
    value: true,
    showIndeterminate: true,
  },
};
