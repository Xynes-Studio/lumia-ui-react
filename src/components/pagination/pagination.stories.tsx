// pagination.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./pagination";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/Pagination",
  component: Pagination,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultPagination: Story = {
  args: {
    pageNumber: 1,
    totalPages: 25,
    onPressNext: () => {
      console.log("next");
    },
    onPressPrevious: () => {
      console.log("prev");
    },
    onPressPageNumber: (page: number) => {
      console.log(page);
    },
  },
};

export const MidPagination: Story = {
  args: {
    pageNumber: 5,
    totalPages: 10,
    onPressNext: () => {},
    onPressPrevious: () => {},
    onPressPageNumber: (page: number) => {
      console.log(page);
    },
  },
};

export const EndPagination: Story = {
  args: {
    pageNumber: 10,
    totalPages: 10,
    onPressNext: () => {},
    onPressPrevious: () => {},
    onPressPageNumber: (page: number) => {
      console.log(page);
    },
  },
};
