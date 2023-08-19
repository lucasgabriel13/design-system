import type { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@lg-design-system/react'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {},
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {
  args: {
    label: 'Label example',
    component: <Button>Hover me</Button>,
  },
}
