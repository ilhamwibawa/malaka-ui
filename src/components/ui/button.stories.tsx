import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Icons } from '../icons';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Button>

export const Base: Story = {
  render: (args) => <Button {...args}>‌Button</Button>,
  args: {},
}

export const Outline: Story = {
  render: (args) => <Button {...args}>‌Button</Button>,
  args: {
    variant: "outline",
  },
}

export const Ghost: Story = {
  render: (args) => <Button {...args}>‌Button</Button>,
  args: {
    variant: "ghost",
  },
}
export const Secondary: Story = {
  render: (args) => <Button {...args}>‌Button</Button>,
  args: {
    variant: "secondary",
  },
}

export const WithLink: Story = {
  render: (args) => <Button {...args}>‌Button</Button>,
  args: {
    variant: "link",
  },
}

export const WithLoading: Story = {
  render: (args) => (
    <Button {...args}>
      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      Button With Loading
    </Button>
  ),
  args: {
    variant: "outline",
  },
}

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Icons.media className="mr-2 h-4 w-4" />
      Button With Icon
    </Button>
  ),
  args: {
    variant: "secondary",
  },
}