import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.webp";

export const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
    </HStack>
  )
}
