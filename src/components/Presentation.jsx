import { Box, Heading, HStack, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

function Presentation() {

  const dataAbout = 
  {
    greetingEng:'Hi!',
    greetingSp:'Hola!',
    PresentationEng:'I\'m a web developer',
    PresentationSp:'Soy desarrollador web',
    actionIng:'Let\'s in and see some of my work.',
    actionSp:'Ven y mira algunos de mis trabajos'
  }
  const fontSizeTitleDinamic = useBreakpointValue({base:'5xl', sm:'5xl', lg:'6xl'})
  const fontSizeTextDinamic = useBreakpointValue({base:'3xl', sm:'3xl', lg:'5xl'})
  return (
    <Stack px={5} w={'90vw'} h={'90vh'} id='Up'>
        <Stack p={5} mt={'20'} w="full" gap={7}>
          <HStack gap={3}>
            <Heading as={'h1'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={fontSizeTitleDinamic} border={'1px'}>Hi!</Heading>
            <Heading>👋</Heading>
          </HStack>
          <Heading as={'h1'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={fontSizeTitleDinamic}>I'm a web developer</Heading>
          <Text fontSize={fontSizeTextDinamic} as={'b'}>Let's in and see some of my work.</Text>
        </Stack>
    </Stack>
  )
}

export default Presentation