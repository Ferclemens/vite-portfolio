import { Box, Heading, HStack, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

function Presentation() {
  const {language} = useThemeContext()
  const textData = 
  {
    greetingEng:'Hi!',
    greetingSp:'Hola!',
    PresentationEng:'I\'m a web developer',
    PresentationSp:'Soy desarrollador web',
    actionEng:'Let\'s in and see some of my work.',
    actionSp:'Ven a ver algunos de mis trabajos.'
  }
  const fontSizeTitleDinamic = useBreakpointValue({base:'5xl', sm:'5xl', lg:'6xl'})
  const fontSizeTextDinamic = useBreakpointValue({base:'3xl', sm:'3xl', lg:'5xl'})
  const marginTopDinamic = useBreakpointValue({base:'48', md:'20', lg:'20'})
  return (
    <Stack px={5} w={'90vw'} h={'90vh'} id={language ? 'Up' : 'Inicio'}>
        <Stack py={5} mt={marginTopDinamic} w="full" gap={7}>
          <HStack gap={3}>
            <Heading as={'h1'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={fontSizeTitleDinamic} border={'1px'}>{language ? textData.greetingEng : textData.greetingSp}</Heading>
            <Heading>👋</Heading>
          </HStack>
          <Heading as={'h1'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize={fontSizeTitleDinamic}>{language ? textData.PresentationEng : textData.PresentationSp}</Heading>
          <Text fontSize={fontSizeTextDinamic} as={'b'}>{language ? textData.actionEng : textData.actionSp}</Text>
        </Stack>
    </Stack>
  )
}

export default Presentation