import type { Meta, StoryObj } from "@storybook/react";
import { MDXParse } from "./mdxp";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/MDXParse",
  component: MDXParse,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof MDXParse>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    markdown: `
    # react-scroll-to-fetch
 
    
> Fetch Data from server as you scroll down with a simple lightweight React Component. Saves you all the troubles from designing a pagination system. This lightweight library works both with \`window\` scroll event and scrollable div elements.

[![NPM](https://img.shields.io/npm/v/react-scroll-to-fetch.svg)](https://www.npmjs.com/package/react-scroll-to-fetch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
## [Demo](https://xynes-hub.github.io/react-scroll-to-fetch/)
## Install
    
    `
  },
};

