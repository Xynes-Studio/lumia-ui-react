import type { Meta, StoryObj } from '@storybook/react';
import { Dnd } from './dnd';

// Define meta information for the Link component
const meta: Meta = {
  title: 'Component/Dnd',
  component: Dnd,
  tags: ["autodocs"],
} satisfies Meta<typeof Dnd>;
export default meta;

// Define the story type
type DndStory = StoryObj<typeof meta>;

// Stories with args
export const DefaultDnd: DndStory = {
  args: {
    
  },
};
