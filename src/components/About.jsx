import { Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function About() {
  return (
    <VStack w="full" h="100vh" p={5} spacing={10} alignItems="flex-start" id='About'>
      <Stack p={5} mt={'20'} bg={'rgba(255, 255, 255, 0.6)'} borderRadius={5} boxShadow='md'>
        <Heading>About</Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</Text>
      </Stack>
    </VStack>
  )
}

export default About