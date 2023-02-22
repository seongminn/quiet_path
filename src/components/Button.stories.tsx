import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Style/Button',
  copmonent: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  type: 'default',
  size: 'medium',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  type: 'primary',
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  type: 'secondary',
  size: 'medium',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Button',
  type: 'danger',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  type: 'default',
  size: 'large',
};

const Small = Template.bind({});
Small.args = {
  children: 'Button',
  type: 'default',
  size: 'small',
};
