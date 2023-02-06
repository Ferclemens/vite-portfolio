import { Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Presentation() {
  return (
    <Stack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
        <Stack p={5} my={'60'}>
          <Heading as={'h1'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='80px' border={'1px'}>Hi! I'm a web developer</Heading>
          <Text fontSize={'3xl'} as={'b'}>Let's in and see some of my work.</Text>
        </Stack>
    </Stack>
  )
}

export default Presentation