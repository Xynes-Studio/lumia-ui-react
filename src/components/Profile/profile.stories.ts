import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from "./profile";
import { LmCkExternalLink } from "@icons/lmCkExternalLink";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/Profile",
  component: Profile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ProfileComponent: Story = {
  args: {
    title: "Title",
    subtitle: "Subtitle",
    avatar:
      "https://images.pexels.com/photos/20393330/pexels-photo-20393330/free-photo-of-a-man-in-a-suit-and-hat-is-standing-in-front-of-a-curtain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    actionIcon: LmCkExternalLink,
  },
};
