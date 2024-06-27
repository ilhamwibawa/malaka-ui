import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Input>

export const Base: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: "email",
    placeholder: "Email",
  },
}

export const File: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input {...args} />
    </div>
  ),
  args: {
    type: "file",
    id: "picture",
  },
}

export const Disabled: Story = {
  render: (args) => <Input {...args} />,
  args: {
    disabled: true,
    type: "email",
    placeholder: "Email",
  },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input {...args} />
    </div>
  ),
  args: {
    type: "email",
    placeholder: "Email",
    id: "email",
  },
}

export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
  args: {
    type: "email",
    placeholder: "Email",
  },
}
