import type { Meta, StoryObj } from "@storybook/react";

import Logo from "./Logo";

const meta = {
  title: "DesignSystem/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cubrics: Story = {};
