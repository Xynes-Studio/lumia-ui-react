import type { Meta, StoryObj } from "@storybook/react";

import LMAsset from "../utils/LumiaAssetManager";
import LumiaLogo from "../icons/logo";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/LMAsset",
  component: LMAsset,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    Asset: LumiaLogo,
  },
} satisfies Meta<typeof LMAsset>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const OneSize: Story = {
  args: {
    Asset: LumiaLogo,
  },
};

export const Large: Story = {
  args: {
    Asset: LumiaLogo,
    size: 2,
  },
};

export const Red: Story = {
  args: {
    Asset: LumiaLogo,
    color: "red",
  },
};

export const GreenLarge: Story = {
  args: {
    Asset: LumiaLogo,
    color: "red",
    size: 3,
  },
};
