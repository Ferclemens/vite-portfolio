import { Box, Heading, HStack, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

function Presentation() {
  const fontSizeDinamic = useBreakpointValue({base:'60px', sm:'55px'})
  return (
    <Stack w="full" h="100vh" px={5} alignItems="flex-start" className='presentation' id='Up'>
        <Stack p={5} mt={'20'} w="full" gap={7}>
          <HStack gap={3}>
            <Heading as={'h1'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={fontSizeDinamic} border={'1px'}>Hi!</Heading>
            <Heading>👋</Heading>
          </HStack>
          <Heading as={'h1'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={fontSizeDinamic}>I'm a web developer</Heading>
          <Text fontSize={'4xl'} as={'b'}>Let's in and see some of my work.</Text>
        </Stack>
    </Stack>
  )
}

export default Presentation