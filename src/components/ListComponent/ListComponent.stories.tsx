import type { Meta, StoryObj } from "@storybook/react";
import ListComponent from "./ListComponent";
import { ListItem } from "./ListComponent.types";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/ListComponent",
  component: ListComponent,
  parameters: {
    docs: {
      description: {
        component: "A nested list component that supports different levels of nesting.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample list items for stories
const items: ListItem[] = [
  {
    text: 'Level 1',
    level: 1,
    children: [
      {
        text: 'Level 2 Nested item',
        level: 2,
        children: [
          {
            text: 'Level 3 Next Item',
            level: 3,
          },
        ],
      },
      {
        text: 'Level 2 This is another item',
        level: 2,
        children: [
          {
            text: 'Level 3 Next Item.',
            level: 3,
            children: [
              {
                text: 'Level 4 More Nesting.',
                level: 4,
                children: [
                  {
                    text: 'Level 5 More nesting.',
                    level: 5,
                    children: [
                      {
                        text: 'Level 6.',
                        level: 6,
                      },
                    ],
                  },
                ],
              },
              {
                text: 'Level 4 This Level.',
                level: 4,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: 'Level 1',
    level: 1,
  },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    items,
    type: 'ordered-list'
  },
};
export const UnorderedList: Story = {
  args: {
    items,
    type: 'unordered-List'
  },
};
