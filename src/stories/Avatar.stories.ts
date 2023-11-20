import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../components/avatar/Avatar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Avatar',
  component: Avatar,
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
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CircularAvatar: Story = {
  args: {
    srcSet: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    shape: 'circular',
    size: 'default',
  },
};
export const RoundedAvatar: Story = {
  args: {
    srcSet: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    shape: 'rounded',
    size: 'default',
  },
};
export const SolidVariant: Story = {
  args: {
    // srcSet: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    shape: 'circular',
    size: 'default',
    initial: 'J'
  },
};
export const SoftVariant: Story = {
  args: {
    // srcSet: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    shape: 'circular',
    size: 'default',
    initial: 'J',
    variantStyle: 'soft',
    variantColor: 'blue'
  },
};
export const OutlineVariant: Story = {
  args: {
    // srcSet: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    shape: 'circular',
    size: 'default',
    initial: 'J',
    variantStyle: "outline",
    variantColor: 'green'
  },
};
export const WhiteVariant: Story = {
  args: {
    // srcSet: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    shape: 'circular',
    size: 'default',
    variantStyle: 'white',
    initial: 'JALA DESIGN'
  },
};
export const PlaceholderIcon: Story = {
  args: {
    // srcSet: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    shape: 'circular',
    size: 'default',
    placeholder: 'icon'
  },
};
export const PlaceholderInitial: Story = {
  args: {
    // srcSet: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    shape: 'circular',
    size: 'default',
    placeholder: 'initial',
    variantStyle: 'solid',
    variantColor: 'yellow',
    initial: 'JALA DESIGN'
  },
};
export const Status: Story = {
  args: {
    // srcSet: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
    shape: 'circular',
    size: 'default',
    placeholder: 'initial',
    initial: 'JALA DESIGN',
    status: 'online',
    statusPlacement: 'top-right',
  },
};
