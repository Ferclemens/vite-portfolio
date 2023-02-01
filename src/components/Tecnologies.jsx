import { Box, Flex, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Carousel from './Carousel'

function Tecnologies() {

  const tecnologies = [
    {
      src:'https://bit.ly/dan-abramov',
      alt:'HTML logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'CSS logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'Javascript logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'Git logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'Python logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'React logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'Redux logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'Node.js logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'Express logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'SQL server logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'Firebase logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'Bootstrap logo'
    },
    {
      src:'https://bit.ly/dan-abramov',
      alt:'Chakra logo'
    }

  ]

  return (
    <VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
      <Heading>Tecnologies</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
      <Stack justifyContent="center" alignItems="center">
        <Carousel/>
      </Stack>
    </VStack>
  )
}

export default Tecnologies