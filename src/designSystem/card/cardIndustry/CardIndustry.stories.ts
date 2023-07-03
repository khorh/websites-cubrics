import type { Meta, StoryObj } from "@storybook/react";

import CardIndustry from "./CardIndustry";
import ConsumerImage from "../../../components/industries/industriesImages/consumer.jpg";

const meta = {
  title: "DesignSystem/Card/Industry",
  component: CardIndustry,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CardIndustry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    data: {
      id: 1,
      title: "Consumer",
      image: {
        fields: {
          file: {
            url: ConsumerImage,
          },
        },
      },
      alt: "person walking with bag",
      order: 1,
    },
  },
};
