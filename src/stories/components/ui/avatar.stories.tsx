import { Meta, StoryFn } from '@storybook/react';
import Avatar, { AvatarProps } from '@/components/ui/avatar';

export default {
  title: 'Finance/Components/UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Avatar component displays a user avatar with a fallback image if the source image fails to load',
      },
    },
  },
  argTypes: {
    name: {
      control: {
        type: 'select',
      },
      description:
        'The name of the avatar image located in the assets/images/avatars folder',
      options: [
        'aqua-flow-utilities',
        'buzz-marketing-group',
        'bytewise',
        'daniel-carter',
        'ecofuel-energy',
        'elevate-education',
        'ella-phillips',
        'emma-richardson',
        'ethan-clark',
        'flavor-fiesta',
        'green-plate-eatery',
        'harper-edwards',
        'james-thompson',
        'liam-hughes',
        'lily-ramirez',
        'mason-martinez',
        'nimbus-data-storage',
        'pixel-playground',
        'rina-sato',
        'savory-bites-bistro',
        'sebastian-cook',
        'serenity-spa-and-wellness',
        'sofia-peterson',
        'spark-electric-solutions',
        'sun-park',
        'swift-ride-share',
        'technova-innovations',
        'urban-services-hub',
        'william-harris',
        'yuna-kim',
      ],
    },
    user: {
      control: {
        type: 'text',
      },
      description: 'The name of the user',
    },
    size: {
      control: {
        type: 'radio',
      },
      description: 'The size of the avatar',
      options: ['sm', 'lg'],
    },
    shape: {
      control: {
        type: 'radio',
      },
      description: 'The shape of the avatar',
      options: ['circle', 'square'],
    },
  },
} as Meta<typeof Avatar>;

const Template: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;

export const ValidAvatar = Template.bind({});
ValidAvatar.args = {
  name: 'aqua-flow-utilities',
  user: 'Aqua Flow Utilities',
  size: 'lg',
};

export const PlaceholderAvatar = Template.bind({});
PlaceholderAvatar.args = {
  name: 'invalid',
  user: 'Invalid User',
  size: 'lg',
};
