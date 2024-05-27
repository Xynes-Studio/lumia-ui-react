import type { Meta, StoryObj } from "@storybook/react";
import { PrismLayout } from "./prism";
import { LmBuble } from "@icons/lmBuble";
import { LmCkAtSign } from "@icons/lmCkAtSign";
import { LmCkBell } from "@icons/lmCkBell";

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

export const PrismLayoutDefault: Story = {
  args: {
    logo: 'https://images.pexels.com/photos/23193129/pexels-photo-23193129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tabsData: [
      {
        id:1,
        title: 'Home',
        icon: LmBuble,
        selected: true,
      },
      {
        id:2,
        title: 'Shop',
        icon: LmCkAtSign,
      },
      {
        id:3,
        title: 'Explore',
        icon: LmCkBell,
      },
    ]
  },
};