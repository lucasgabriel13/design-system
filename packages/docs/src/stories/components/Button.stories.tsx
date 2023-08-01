import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Label',
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
