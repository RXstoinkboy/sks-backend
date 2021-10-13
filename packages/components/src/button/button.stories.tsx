import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button, ButtonType } from './button';

import { ArgCategory } from '../stories/types';
import { createArg } from '../stories/utils';

export default {
   argTypes: {
      type: createArg({
         category: ArgCategory.VISUAL,
         control: 'select',
         defaultValue: ButtonType.PRIMARY,
         description:
            'It controls what type of button is displayed (e.g PRIMARY)',
         options: ButtonType,
      }),
   },
   component: Button,
   title: 'Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   children: 'Primary',
   type: ButtonType.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
   children: 'Secondary',
   type: ButtonType.SECONDARY,
};
