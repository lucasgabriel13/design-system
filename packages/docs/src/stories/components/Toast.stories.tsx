import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@lg-design-system/react'

export default {
  title: 'Components/Toast',
  component: Toast,
  args: {
    title: 'Example Title',
    subtitle: 'Example subtitle',
    open: true,
    action: <Button>Show</Button>,
    onClose: () => null,
  },
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {}
