import type { Meta, StoryObj } from "@storybook/react";

import CardService from "./CardService";

const meta = {
  title: "DesignSystem/Card/Service",
  component: CardService,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CardService>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    data: {
      id: 1,
      title: "Project Management",
      introduction:
        "Companies are continuously transforming their organization to stay competitive.",
      description:
        "At Cubrics, our structured methodologies equip you to plan and execute your projects by leveraging our knowledge, tools and expertise gained from consulting with blue-chip brands.",
      order: 1,
    },
  },
};
