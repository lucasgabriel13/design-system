import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  maxWidth: 320,
  padding: '$3 $5',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',
})

export const Title = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$white',
})

export const Subtitle = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray200',
})

export const ButtonClose = styled(Toast.Close, {
  width: '$5',
  height: '$5',
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',
  color: '$gray200',
})
