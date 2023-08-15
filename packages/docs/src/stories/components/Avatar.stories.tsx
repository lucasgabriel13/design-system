import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'
import { fontSizes } from '@ignite-ui/tokens'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/lucasgabriel13.png',
    alt: 'Lucas Gonçalves',
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
