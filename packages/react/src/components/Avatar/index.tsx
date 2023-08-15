import { User } from 'phosphor-react'
import { AvataContainer, AvatarImage, AvatarFallback } from './styles'
import { ComponentProps } from 'react'

export type AvatarProps = ComponentProps<typeof AvatarImage>

export const Avatar = (props: AvatarProps) => {
  return (
    <AvataContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvataContainer>
  )
}
