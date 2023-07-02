import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

const meta = {
  title: "DesignSystem/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const P1: Story = {
  args: {
    type: "p1",
    children: "P1 - Lorem ipsum",
  },
};

export const P2: Story = {
  args: {
    type: "p2",
    children: "P2 - Lorem ipsum",
  },
};

export const Footer: Story = {
  args: {
    type: "footer",
    children: "Footer - Lorem ipsum",
  },
};
