import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./textInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/TextInput",
  component: TextInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Fill: Story = {
  args: {
    type: "fill",
    inputType: "text",
    label: "Label",
    errorMessage: "Error Message",
    placeholder: "Placeholder",
  },
};

export const Outlined: Story = {
  args: {
    type: "outlined",
    inputType: "email",
    label: "Label",
    errorMessage: "Error Message",
    placeholder: "Placeholder",
  },
};

export const OutlineOnly: Story = {
  args: {
    type: "outline-only",
    inputType: "password",
    label: "Label",
    // errorMessage: "Error Message",
    placeholder: "Placeholder",
  },
};
