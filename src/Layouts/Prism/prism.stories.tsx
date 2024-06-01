import { Meta, StoryObj } from "@storybook/react";
import { PrismLayout } from "./prism";
import { LmBuble } from "@icons/lmBuble";
import { LmCkAtSign } from "@icons/lmCkAtSign";
import { LmCkBell } from "@icons/lmCkBell";

const meta: Meta<typeof PrismLayout> = {
  title: "Layout/Prism",
  component: PrismLayout,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrismLayoutDefault: Story = {
  args: {
    logo: "https://images.pexels.com/photos/23193129/pexels-photo-23193129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tabsData: [
      {
        id: 1,
        title: "Home",
        icon: LmBuble,
        selected: true,
      },
      {
        id: 2,
        title: "Shop",
        icon: LmCkAtSign,
      },
      {
        id: 3,
        title: "Explore",
        icon: LmCkBell,
      },
    ],
  },
};
