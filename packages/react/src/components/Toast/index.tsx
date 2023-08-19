import * as ToastRadix from '@radix-ui/react-toast'
import { Title, Subtitle, ToastContainer, ButtonClose } from './styles'
import { X } from 'phosphor-react'

export interface ToastProps {
  title: string
  subtitle: string
  open: boolean
  onClose: () => void
}

export const Toast = ({ title, subtitle, open, onClose }: ToastProps) => {
  return (
    <ToastRadix.Provider>
      <ToastContainer open={open}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <ButtonClose onClick={onClose}>
          <X />
        </ButtonClose>
      </ToastContainer>
      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  )
}
