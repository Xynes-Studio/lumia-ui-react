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
    markdown: `# @ts-stack/markdown

> A full-featured markdown parser and compiler, written in TypeScript.

This is fork of popular library marked from [this commit](https://github.com/markedjs/marked/tree/39fbc8aed)
(Merge pull request #961 from chjj/release-0.3.7, Dec 1, 2017).

## lang
- [Chinese](./lang/zh/README.md)

## Table of contents

- [Install](#install)
- [Usage](#usage)
  - [Minimal usage](#minimal-usage)
  - [Example usage with highlight.js](#example-usage-with-highlightjs)
  - [Overriding renderer methods](#overriding-renderer-methods)
  - [Example of setting a simple block rule](#example-of-setting-a-simple-block-rule)
- [Benchmarks](#benchmarks)
  - [Options for benchmarks](#options-for-benchmarks)
    - [Example of usage bench options](#example-of-usage-bench-options)
- [Contribution and License Agreement](#contribution-and-license-agreement)
- [License](#license)

## Install
`
  },
};

