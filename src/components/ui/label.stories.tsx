import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Label } from "./label";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Label>

export const Base: Story = {
  render: (args) => (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id={args.htmlFor} />
        <Label {...args} />
      </div>
    </div>
  ),
  args: {
    children: "Accept terms and conditions",
    htmlFor: "terms",
  },
}
