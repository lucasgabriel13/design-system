import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  background: '$gray900',
  borderRadius: '5px',
  fontFamily: '$default',
  fontSize: '$sm',
})
