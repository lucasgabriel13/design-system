import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipContent } from './styles'

export interface TooltipProps {
  label: string
  component: ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({ label, component }) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{component}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent>
            {label}
            <TooltipRadix.Arrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
