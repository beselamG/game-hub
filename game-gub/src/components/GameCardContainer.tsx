import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props {
    children:ReactNode
}
export const GameCardContainer = ({children}:Props) => {
  return (
   <Box width='300px' borderRadius={10} overflow='hidden' backgroundColor='red'>
   {children}
   </Box>
  )
}
