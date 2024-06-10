import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Icons } from '../icons';
import { Alert, AlertDescription, AlertTitle } from "./alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Alert>

export const Base: Story = {
  render: (args) => (
    <Alert {...args}>
      <Icons.check className="h-5 w-5" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your account has been successfully created.
      </AlertDescription>
    </Alert>
  ),
  args: {},
}

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args}>
      <Icons.close className="h-5 w-5" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        There was an error creating your account.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "destructive"
  },
}