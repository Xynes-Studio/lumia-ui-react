import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

// Define meta information for the Link component
const meta: Meta = {
  title: 'Component/Link',
  component: Link,
  // Add any additional configuration here if necessary
};
export default meta;

// Define the story type
type LinkStory = StoryObj<typeof meta>;

// Stories with args
export const DefaultLink: LinkStory = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

export const ExternalLink: LinkStory = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'External Link',
  },
};

export const StyledLink: LinkStory = {
  args: {
    href: '#',
    style: { color: 'red', textDecoration: 'none' },
    children: 'Styled Link',
  },
};
