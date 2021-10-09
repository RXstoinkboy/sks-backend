import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonType } from "./button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      description: "It controls what type of button is displayed (e.g PRIMARY)",
      defaultValue: ButtonType.PRIMARY,
      options: ButtonType,
      control: {
        type: "select",
      },
      table: {
        category: "Test",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: ButtonType.PRIMARY,
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: ButtonType.SECONDARY,
  children: "Secondary",
};
