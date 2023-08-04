import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'
import { fontSizes } from '@ignite-ui/tokens'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Exemple text',
    size: 'md',
  },
  argTypes: {
    size: {
      options: Object.keys(fontSizes),
      control: { type: 'select' },
      defaultValue: 'md',
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
