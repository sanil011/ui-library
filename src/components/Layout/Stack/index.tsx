import { Box, BoxProps } from '../Box'
import { cn } from '../../../utils'

type StackProps = BoxProps
const Stack = ({className,...props}:StackProps) => {
  return (
      <Box {...props} className={cn("flex flex-col items-start", className) } />
  )
}

export default Stack