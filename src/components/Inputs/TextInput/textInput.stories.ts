import type { Meta, StoryObj } from "@storybook/react";
import { date, required } from "@utils/Validations";
import { TextInput } from "./textInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/TextInput",
  component: TextInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args:{
    validations:[required,date.isBetween(new Date("2024-05-01"),new Date("2024-05-31"))]
  }
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
