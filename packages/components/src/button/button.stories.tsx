import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonType } from './button';

import { createArg } from '../stories/utils';
import { ArgCategory } from '../stories/types';

export default {
   title: 'Button',
   component: Button,
   argTypes: {
      type: createArg({
         description:
            'It controls what type of button is displayed (e.g PRIMARY)',
         category: ArgCategory.VISUAL,
         defaultValue: ButtonType.PRIMARY,
         control: 'select',
         options: ButtonType,
      }),
   },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   type: ButtonType.PRIMARY,
   children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
   type: ButtonType.SECONDARY,
   children: 'Secondary',
};
