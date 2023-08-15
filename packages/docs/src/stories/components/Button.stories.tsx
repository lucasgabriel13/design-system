import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { GoogleLogo } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    children: 'Small',
    size: 'sm',
  },
}

export const Disable: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <GoogleLogo weight="bold" /> Sign in with Google
      </>
    ),
  },
}
