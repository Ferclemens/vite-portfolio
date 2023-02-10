import { Box, Button, Flex, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack, Icon, useBreakpointValue, Link } from '@chakra-ui/react'
import React from 'react'
import { SiChakraui, SiHtml5, SiCss3, SiJavascript, SiGit, SiPython, SiReact, SiRedux, SiNodedotjs, SiExpress, SiMysql, SiFirebase, SiBootstrap, SiVisualstudiocode, SiDjango, SiJava, SiVite } from 'react-icons/si';

function Tecnologies() {
  const fontSizeDinamic = useBreakpointValue({base:'xl', sm:'2xl'})
  const paddingDinamic = useBreakpointValue({base:'5', sm:'10'})
  const gapDinamic = useBreakpointValue({base:'5', sm:'8'})
  const tecnologies = [
    {
      src: SiHtml5,
      title:'HTML',
      color:'orange',
      link:'https://developer.mozilla.org/es/docs/Web/HTML'
    },
    {
      src: SiCss3,
      title:'CSS',
      color:'facebook',
      link:'https://developer.mozilla.org/es/docs/Web/CSS'
    },
    {
      src: SiJavascript,
      title:'Javascript',
      color:'yellow',
      link:'https://developer.mozilla.org/es/docs/Web/JavaScript'
    },
    {
      src: SiGit,
      title:'Git',
      color:'red',
      link:'https://git-scm.com/'
    },
    {
      src: SiVisualstudiocode,
      title:'Visual Studio',
      color:'twitter',
      link:'https://code.visualstudio.com/'
    },
    {
      src: SiJava,
      title:'java',
      color:'blue',
      link:'https://www.oracle.com/ar/java/'
    },
    {
      src: SiPython,
      title:'Python',
      color:'green',
      link:'https://www.python.org/'
    },
    {
      src: SiDjango,
      title:'Django',
      color:'teal',
      link:'https://www.djangoproject.com/'
    },
    {
      src: SiReact,
      title:'React',
      color:'facebook',
      link:'https://beta.es.reactjs.org/'
    },
    {
      src: SiRedux,
      title:'Redux',
      color:'purple',
      link:'https://es.redux.js.org/'
    },
    {
      src: SiVite,
      title:'Vite',
      color:'pink',
      link:'https://vitejs.dev/'
    },
    {
      src: SiNodedotjs,
      title:'Node.js',
      color:'green',
      link:'https://nodejs.org/es/'
    },
    {
      src: SiExpress,
      title:'Express',
      color:'gray',
      link:'https://expressjs.com/'
    },
    {
      src: SiMysql,
      title:'MySQL',
      color:'telegram',
      link:'https://www.mysql.com/'
    },
    {
      src: SiFirebase,
      title:'Firebase',
      color:'yellow',
      link:'https://firebase.google.com/?hl=es'
    },
    {
      src: SiBootstrap,
      title:'Bootstrap',
      color:'purple',
      link:'https://getbootstrap.com/'
    },
    {
      src: SiChakraui,
      title:'Chakra',
      color:'teal',
      link:'https://chakra-ui.com/'
    }
  ]

  return (
    <VStack p={5} spacing={10} alignItems="flex-start" id='Tecnologies'>
      <Stack p={5} mt={'20'} bg={'rgba(255, 255, 255, 0.6)'} borderRadius={5} boxShadow={'dark-lg'}>
        <Heading as={'h2'}>Tecnologies</Heading>
        <Text fontSize={fontSizeDinamic}>Languages, libraries, frameworks and tools that I use so far.</Text>
        <HStack justifyContent="center" alignItems="center" flexWrap="wrap" gap={gapDinamic} p={paddingDinamic}>
          {tecnologies.map((item) => {
            const {src, title, color, link} = item
            return (
              <Button size="lg" leftIcon={<Icon as={src} />} key={title} colorScheme={color} boxShadow={'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'}><Link href={link} isExternal>{title}</Link></Button>
            )
          })}
        </HStack>
      </Stack>
    </VStack>
  )
}

export default Tecnologies