import { Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

function Presentation() {
  const fontSizeDinamic = useBreakpointValue({base:'60px', sm:'75px'})
  return (
    <Stack w="full" h="100vh" p={5} spacing={10} alignItems="flex-start" className='presentation' id='Home'>
        <Stack p={5} mt={'20'} mb={'56'} w="full" gap={7}>
          <Heading as={'h1'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={fontSizeDinamic} border={'1px'}>Hi! I'm a web developer</Heading>
          <Text fontSize={'3xl'} as={'b'}>Let's in and see some of my work.</Text>
        </Stack>
    </Stack>
  )
}

export default Presentation