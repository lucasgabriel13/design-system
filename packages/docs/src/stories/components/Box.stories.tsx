import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testing Box element</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {
  args: {},
}
