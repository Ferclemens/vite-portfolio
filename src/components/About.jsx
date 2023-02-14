import { Heading, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { useThemeContext } from '../context/ThemeContext'



function About() {
  const {language} = useThemeContext()
  const textData = 
    {
      engTitle: 'About',
      spTitle: 'Acerca de mi',
      engAbout:'My name is Fernando, I am a front end web developer. Currently carrying out projects with back end tools for managing Sql and NoSql databases. Curious, empathetic and proactive. With experience working in groups, project management, repositories and eager to learn. Looking for my first job in the technology sector.',
      spaAbout:'Mi nombre es Fernando, soy desarrollador web front-end. Actualmente realizando proyectos con herramientas back-end para el manejo de bases de datos Sql y NoSql. Curioso, empático y proactivo. Con experiencia de trabajo en grupos, gestión de proyectos, repositorios y muchas ganas de aprender. En busca de mi primer empleo en el sector tecnológico.'
    }

  const fontSizeDinamic = useBreakpointValue({base:'xl', sm:'2xl', lg:'3xl'})
  const lineHeightDinamic = useBreakpointValue({base:'8', sm:'1.4'})
  const marginTopDinamic = useBreakpointValue({base:'20', sm:'16', lg:'32'})
  const marginXDinamic = useBreakpointValue({base:'5', sm:'22', lg:'52'})
  return (
    <VStack p={5} alignItems="flex-start" id={language ? 'About' : 'Acerca de'}>
      <Stack mb={'32'} mx={marginXDinamic} p={5} mt={marginTopDinamic} bg={'rgba(255, 255, 255, 0.6)'} borderRadius={5} boxShadow={'dark-lg'}>
        <Heading>{language ? textData.engTitle : textData.spTitle}</Heading>
        <Text fontSize={fontSizeDinamic} lineHeight={lineHeightDinamic}>{language ? textData.engAbout : textData.spaAbout} 💻 💪</Text>
      </Stack>
    </VStack>
  )
}

export default About