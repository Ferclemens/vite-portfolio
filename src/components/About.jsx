import { Heading, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { useThemeContext } from '../context/ThemeContext'



function About() {
  const {language} = useThemeContext()
  const textData = 
    {
      engTitle: 'About',
      spTitle: 'Acerca de mi',
      engAbout:'My name is Fernando, I am a front-end web developer. Currently expanding backend knowledge with Java. Curious, empathetic and proactive. I have experience in group work, project management, repositories and am eager to learn. Looking for challenges to put into practice what has been learned.',
      spaAbout:'Mi nombre es Fernando, soy desarrollador web front-end. Actualmente ampliando conocimientos de backend con Java. Curioso, empático y proactivo. Con experiencia de trabajo en grupos, gestión de proyectos, repositorios y muchas ganas de aprender. En busca de desafios para poner en práctica lo aprendido.'
    }

  const fontSizeDinamic = useBreakpointValue({base:'xl', sm:'2xl', lg:'3xl'})
  const lineHeightDinamic = useBreakpointValue({base:'8', sm:'1.4'})
  const marginTopDinamic = useBreakpointValue({base:'20', sm:'16', lg:'32'})
  const marginXDinamic = useBreakpointValue({base:'5', sm:'22', lg:'52'})
  return (
    <VStack p={5} alignItems="flex-start" id={language ? 'About' : 'Acerca de'}>
      <Stack mb={'22'} mx={marginXDinamic} p={5} mt={marginTopDinamic} bg={'rgba(255, 255, 255, 0.6)'} borderRadius={5} boxShadow={'dark-lg'}>
        <Heading as={'h2'}>{language ? textData.engTitle : textData.spTitle}</Heading>
        <Text fontSize={fontSizeDinamic} lineHeight={lineHeightDinamic}>{language ? textData.engAbout : textData.spaAbout} 💻 💪</Text>
      </Stack>
    </VStack>
  )
}

export default About