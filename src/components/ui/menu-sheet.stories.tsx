import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LinkNone2Icon } from "@radix-ui/react-icons";
import { ArrowUpDownIcon, AxeIcon, BugIcon, EarOffIcon, PlugZap2Icon, RocketIcon, ShieldBanIcon, ShieldIcon, TornadoIcon } from "lucide-react";

import { MenuSheet } from "./menu-sheet";


const meta: Meta<typeof MenuSheet> = {
  title: "Components/MenuSheet",
  component: MenuSheet,
  tags: ["autodocs"],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof MenuSheet>

export const Base: Story = {
  render: (args) => (
    <div className="w-full flex flex-col h-full min-h-screen">
      <div className="flex flex-1">
        <div className="w-16 min-h-min flex flex-col border-r flex-shrink-0 items-center py-2">
          <MenuSheet {...args} />
        </div>
        <div className="flex-1">
          yeah
        </div>
      </div>
    </div>
  ),
  args: {
    menu: [

      {
        title: "Security Information Management",
        children: [
          {
            icon: <ShieldIcon />,
            title: "Security Events",
            href: "/siem/dashboard?type=security-events",
          },
          {
            icon: <ShieldBanIcon />,
            title: "Integrity Monitoring",
            href: "/siem/dashboard?type=integrity-monitoring",
          },
        ],
      },
      {
        title: "Auditing and Policy Monitoring",
        children: [
          {
            icon: <RocketIcon />,
            title: "Policy Monitoring",
            href: "/siem/dashboard?type=policy-monitoring",
          },
          {
            icon: <AxeIcon />,
            title: "Security Configuration Assessment",
            href: "/siem/security-config-assessment",
          },
        ],
      },
      {
        title: "Regulatory Compliance",
        children: [
          {
            icon: <BugIcon />,
            title: "General Data Protection Regulation",
            href: "/siem/dashboard?type=gdpr",
          },
        ],
      },
      {
        title: "Threat Detection and Response",
        children: [
          {
            icon: <EarOffIcon />,
            title: "Vulnerability",
            href: "/siem/vulnerability",
          },
          {
            icon: <TornadoIcon />,
            title: "Mitre Attack",
            href: "/siem/dashboard?type=mitre-attack",
          },
        ],
      },
      {
        title: "Manager Administration",
        children: [
          {
            icon: <PlugZap2Icon />,
            title: "Rules",
            href: "/siem/manager/rules",
          },
        ],
      },
      {
        title: "Agent Management",
        children: [
          {
            icon: <LinkNone2Icon />,
            title: "Agents",
            href: "/siem/agents",
          },
        ],
      },
      {
        title: "Security",
        children: [
          {
            icon: <ArrowUpDownIcon />,
            title: "Security Orchestration, Automation and Response",
            href: "/soar",
          },
        ],
      },
    ]

  },
}
