import type { Meta, StoryObj } from "@storybook/react";
import { BulletNumberedList } from "./BulletNumberedList";

// Define meta information for the ListView component
const meta: Meta<typeof BulletNumberedList> = {
  title: "View/BulletNumberedList",
  component: BulletNumberedList,
  // Optional: Include argTypes if you want to specify properties that control the behavior in the UI
  tags: ["autodocs"],
};
export default meta;

// Type for stories using StoryObj
type Story = StoryObj<typeof meta>;

export const BulletNumbered: Story = {
  args: {
    listType: "bulleted-list",
  },
};
