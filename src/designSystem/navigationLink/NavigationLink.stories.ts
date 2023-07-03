import type { Meta, StoryObj } from "@storybook/react";

import NavigationLink from "./NavigationLink";

const meta = {
  title: "DesignSystem/NavigationLink",
  component: NavigationLink,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NavigationLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: "Services",
    destination: "#services",
    dataTestId: "navigation-services",
  },
};
