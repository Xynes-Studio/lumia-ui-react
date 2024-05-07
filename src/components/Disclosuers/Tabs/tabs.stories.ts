import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./tabs";
import { LmCkExternalLink } from "@icons/lmCkExternalLink";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Disclosures/Tabs",
  component: Tabs,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HorizontalTab: Story = {
  args: {
    direction: "horizontal",
    selectType: "select-100",
    label: "The Horizontal Tab",
    icon: LmCkExternalLink,
    selected: false,
    color: "#000000",
    iconSize: 1,
  },
};

export const VerticalTab: Story = {
  args: {
    direction: "vertical",
    selectType: "select-100",
    label: "The Vertical Tab",
    icon: LmCkExternalLink,
    selected: false,
    color: "#000000",
    iconSize: 1,
  },
};
