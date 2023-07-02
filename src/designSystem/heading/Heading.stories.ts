import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

const meta = {
  title: "DesignSystem/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    type: "h1",
    children: "H1 - Lorem ipsum",
  },
};

export const H2: Story = {
  args: {
    type: "h2",
    children: "H2 - Lorem ipsum",
  },
};

export const H3: Story = {
  args: {
    type: "h3",
    children: "H3 - Lorem ipsum",
  },
};
