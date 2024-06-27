import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Base: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox  {...args} />
      <label
        htmlFor={args.id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
  args: {
    id: "terms",
  },
}

export const WithText: Story = {
  render: (args) => (
    <div className="flex items-start space-x-2">
      <Checkbox {...args} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={args.id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
  args: {
    id: "terms2",
  },
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label
        htmlFor={args.id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
  args: {
    id: "terms3",
    disabled: true,
  },

}