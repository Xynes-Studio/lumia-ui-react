import type { Meta, StoryObj } from '@storybook/react';
import SplitPane from './SplitPane';

// Define meta information for the SplitPane component
const meta: Meta<typeof SplitPane> = {
  title: 'View/SplitPane',
  component: SplitPane,
  tags: ['autodocs'],
};
export default meta;

// Type for stories using StoryObj
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    orientation: 'horizontal',
    initialSizes: [33, 33, 34],
    minSizes: [10, 10, 10],
    maxSizes: [90, 90, 90],
  },
  render: (args) => (
    <div style={{ width: '100%', height: '400px' }}>
      <SplitPane {...args}>
        <div style={{ backgroundColor: '#f0f0f0', height: '100%' }}>Pane A</div>
        <div style={{ backgroundColor: '#d0d0d0', height: '100%' }}>Pane B</div>
        <div style={{ backgroundColor: '#b0b0b0', height: '100%' }}>Pane C</div>
      </SplitPane>
    </div>
  ),
};

// Horizontal story variation
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    initialSizes: [50, 50],
    minSizes: [10, 10],
    maxSizes: [90, 90],
  },
  render: (args) => (
    <div style={{ width: '100%', height: '400px' }}>
      <SplitPane {...args}>
        <div style={{ backgroundColor: '#f0f0f0', height: '100%' }}>Pane A</div>
        <div style={{ backgroundColor: '#d0d0d0', height: '100%' }}>Pane B</div>
      </SplitPane>
    </div>
  ),
};

// Vertical story variation
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    initialSizes: [50, 50],
    minSizes: [10, 10],
    maxSizes: [90, 90],
  },
  render: (args) => (
    <div style={{ width: '100%', height: '400px' }}>
      <SplitPane {...args}>
        <div style={{ backgroundColor: '#f0f0f0', height: '100%' }}>Pane A</div>
        <div style={{ backgroundColor: '#d0d0d0', height: '100%' }}>Pane B</div>
      </SplitPane>
    </div>
  ),
};
