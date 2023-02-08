import { Heading, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'

function About() {
  const fontSizeDinamic = useBreakpointValue({base:'xl', sm:'4xl'})
  const lineHeightDinamic = useBreakpointValue({base:'9', sm:'1.4'})
  const marginTopDinamic = useBreakpointValue({base:'20', sm:'40'})
  return (
    <VStack w="full" h="100vh" p={5} alignItems="flex-start" id='About'>
      <Stack p={5} mt={marginTopDinamic} bg={'rgba(255, 255, 255, 0.6)'} borderRadius={5} boxShadow='md'>
        <Heading>About</Heading>
        <Text fontSize={fontSizeDinamic} lineHeight={lineHeightDinamic}>My name is Fernando, I am a front end web developer. Currently carrying out projects with back end tools for managing Sql and NoSql databases. Curious, empathetic and proactive. With experience working in groups, project management, repositories and eager to learn. Looking for my first job in the technology sector. 💻 💪</Text>
      </Stack>
    </VStack>
  )
}

export default About