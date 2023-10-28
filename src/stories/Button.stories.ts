import type { Meta, StoryObj } from '@storybook/react';
import { FaPlus } from "react-icons/fa6";
import { Button } from '../components/button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  //   backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    type: 'primary',
    label: 'Button',
    className:'w-[132px]'
  },
};
export const ButtonGroup: Story = {
  args: {
    type: 'primary',
    label: 'Button',
    className:'w-[232px]'
  },
};
export const ButtonIcon: Story = {
  args: {
    type: 'primary',
    label: 'Button',
    className:'w-[132px]',
    icon:FaPlus
  },
};
