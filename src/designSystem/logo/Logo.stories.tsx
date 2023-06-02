import { ComponentStory } from "@storybook/react";
import Logo from "./Logo";

export default {
  title: "Components/Logos",
  component: Logo,
};

const Template: ComponentStory<typeof Logo> = () => {
  return (
    <>
      <Logo />
    </>
  );
};

export const Logos = Template.bind({});
