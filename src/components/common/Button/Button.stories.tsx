import { ComponentMeta, ComponentStory } from '@storybook/react';
import tw from 'twin.macro';
import Button from './Button';

export default {
  title: 'components/common/Button',
  copmonent: Button,
  decorators: [
    (Story) => (
      <div
        css={tw`w-[480px] h-screen bg-gray-700 flex justify-center items-center px-48`}
      >
        <Story />
      </div>
    ),
  ],
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
  type: 'primary',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  type: 'primary',
  size: 'small',
};

export const SmallElipsis = Template.bind({});
SmallElipsis.args = {
  children:
    'ButtonButtonButtonButtonButtonButtonButtonButtonButtonButtonButtonButton',
  type: 'primary',
  size: 'small',
};
