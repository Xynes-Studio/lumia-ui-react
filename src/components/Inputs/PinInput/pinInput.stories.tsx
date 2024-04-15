import type { Meta, StoryObj } from "@storybook/react";
import { PinInput } from "./pinInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/PinInput",
  component: PinInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Fill: Story = {
  args: {
    label: "",
    fillType: 'fill',
    numberOfFields: 4,
    value: '',
    onValueChange(pinValue) {
        console.log('onValueChange', pinValue);
    },
  },
};

export const Outlined: Story = {
  args: {
    label: "",
    fillType: 'outlined',
    numberOfFields: 5,
    value: '',
    onValueChange(pinValue) {
        console.log('onValueChange', pinValue);
    },
    labelPosition: 'start'
  },
};

export const Bottom: Story = {
  args: {
    label: "Enter your Pin",
    fillType: 'bottom',
    numberOfFields: 6,
    value: '',
    onValueChange(pinValue) {
        console.log('onValueChange', pinValue);
    },
  },
};
