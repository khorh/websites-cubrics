import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "DesignSystem/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    email: "contact@cubrics.co.uk",
    children: "Contact",
  },
};
