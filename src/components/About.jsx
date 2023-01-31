import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function About() {
  return (
    <VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
      <Heading>About</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</Text>
    </VStack>
  )
}

export default About