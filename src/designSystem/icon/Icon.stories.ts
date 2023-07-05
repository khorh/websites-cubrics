import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";

const meta = {
  title: "DesignSystem/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  args: {
    name: "menu",
  },
};
