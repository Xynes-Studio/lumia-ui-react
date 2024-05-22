import type { Meta, StoryObj } from "@storybook/react";
import { PrismLayout } from "./prism";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layout/Prism",
  component: PrismLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof PrismLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileComponent: Story = {
  args: {
  },
};