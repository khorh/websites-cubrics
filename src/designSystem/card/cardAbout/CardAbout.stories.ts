import type { Meta, StoryObj } from "@storybook/react";

import CardAbout from "./CardAbout";

const meta = {
  title: "DesignSystem/Card/About",
  component: CardAbout,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CardAbout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Services: Story = {
  args: {
    data: {
      id: 1,
      title: "Purpose",
      description:
        "Our purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs.",
      order: 1,
    },
  },
};
