import { ComponentPropsWithRef, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styled'

export type TextInputProps = ComponentPropsWithRef<typeof Input> & {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} ref={ref} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
