import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";
import { maxLength } from "@utils/Validations";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Textarea",
  component: Textarea,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Fill: Story = {
  args: {
    type: "fill",
    label: "Label",
    errorMessage: "Error Message",
    placeholder: "Placeholder",
    validations:[maxLength(50)]
  },
};

export const Outlined: Story = {
  args: {
    type: "outlined",
    label: "Label",
    errorMessage: "Error Message",
    placeholder: "Placeholder",
  },
};

export const OutlineOnly: Story = {
  args: {
    type: "outline-only",
    label: "Label",
    // errorMessage: "Error Message",
    placeholder: "Placeholder",
  },
};
