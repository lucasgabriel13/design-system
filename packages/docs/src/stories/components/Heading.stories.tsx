import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'
import { fontSizes } from '@ignite-ui/tokens'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Exemple Heading',
    size: 'md',
  },
  argTypes: {
    size: {
      options: Object.keys(fontSizes),
      control: { type: 'select' },
      defaultValue: 'md',
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a prop `as`',
      },
    },
  },
}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong Heading',
    as: 'strong',
  },
}
