import { Box, Flex, GridItem, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Tecnologies() {
  return (
    <VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
      <Heading>Tecnologies</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
      <Flex flexWrap="wrap" gap={4}>
        <Image
          borderRadius='lg'
          boxSize='120px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
          <Image
          borderRadius='lg'
          boxSize='120px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
          <Image
          borderRadius='lg'
          boxSize='120px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
          <Image
          borderRadius='lg'
          boxSize='120px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
      </Flex>
    </VStack>
  )
}

export default Tecnologies