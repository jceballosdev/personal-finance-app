import { Meta, StoryFn } from '@storybook/react';
import Image, { ImageProps } from '@components/ui/image';
import authenticationImage from '@/assets/images/illustration-authentication.svg';

export default {
  title: 'Finance/Components/UI/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Image component displays an image with a fallback image if the source image fails to load',
      },
    },
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
      description:
        'The source filename of the image located in the assets/images folder',
    },
    alt: {
      control: {
        type: 'text',
      },
      description: 'The alternative text for the image',
    },
    width: {
      control: {
        type: 'number',
      },
      description: 'The width of the image',
    },
    height: {
      control: {
        type: 'number',
      },
      description: 'The height of the image',
    },
  },
} as Meta<typeof Image>;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const ValidImage = Template.bind({});
ValidImage.args = {
  src: authenticationImage,
  alt: 'Login and Sign up illustration',
  width: 260,
  height: 620,
};

export const PlaceholderImage = Template.bind({});
PlaceholderImage.args = {
  src: 'invalid.jpg',
  alt: 'placeholder',
};
