import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Disclosures/Card",
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    type: "default",
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title Goes here Title Goes here Title Goes here",
    description: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    displaySwitch: true,
  },
};

export const Fill: Story = {
  args: {
    type: "fill",
    image:
      "https://images.pexels.com/photos/1595243/pexels-photo-1595243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title Goes here",
    description: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    displaySwitch: true,
  },
};

export const Outlined: Story = {
  args: {
    type: "outlined",
    image:
      "https://images.pexels.com/photos/1595243/pexels-photo-1595243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title Goes here",
    description: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    displaySwitch: false,
    actionElement: undefined,
  },
};
