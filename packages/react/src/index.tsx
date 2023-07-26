import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  background: '$ignite500',
  borderRadius: '$md',
  height: '$10',
  padding: '$4',
})

export function App() {
  return <Button>Hello world!</Button>
}
