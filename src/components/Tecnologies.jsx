import { Box, Button, Flex, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack, Icon } from '@chakra-ui/react'
import React from 'react'
import { SiChakraui, SiHtml5, SiCss3, SiJavascript, SiGit, SiPython, SiReact, SiRedux, SiNodedotjs, SiExpress, SiMysql, SiFirebase, SiBootstrap, SiVisualstudiocode, SiDjango, SiJava, SiVite } from 'react-icons/si';

function Tecnologies() {

  const tecnologies = [
    {
      src: SiHtml5,
      title:'HTML',
      color:'orange'
    },
    {
      src: SiCss3,
      title:'CSS',
      color:'facebook'
    },
    {
      src: SiJavascript,
      title:'Javascript',
      color:'yellow'
    },
    {
      src: SiGit,
      title:'Git',
      color:'red'
    },
    {
      src: SiVisualstudiocode,
      title:'Visual Studio',
      color:'twitter'
    },
    {
      src: SiJava,
      title:'java',
      color:'blue'
    },
    {
      src: SiPython,
      title:'Python',
      color:'green'
    },
    {
      src: SiDjango,
      title:'Django',
      color:'teal'
    },
    {
      src: SiReact,
      title:'React',
      color:'facebook'
    },
    {
      src: SiRedux,
      title:'Redux',
      color:'purple'
    },
    {
      src: SiVite,
      title:'Vite',
      color:'pink'
    },
    {
      src: SiNodedotjs,
      title:'Node.js',
      color:'green'
    },
    {
      src: SiExpress,
      title:'Express',
      color:'gray'
    },
    {
      src: SiMysql,
      title:'MySQL',
      color:'telegram'
    },
    {
      src: SiFirebase,
      title:'Firebase',
      color:'yellow'
    },
    {
      src: SiBootstrap,
      title:'Bootstrap',
      color:'purple'
    },
    {
      src: SiChakraui,
      title:'Chakra',
      color:'teal'
    }

  ]

  return (
    <VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
      <Stack p={5} bg={'rgba(255, 255, 255, 0.6)'} borderRadius={5} boxShadow='md'>
        <Heading>Tecnologies</Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
        <HStack justifyContent="center" alignItems="center" flexWrap="wrap" gap={5}>
          {tecnologies.map((item) => {
            const {src, title, color} = item
            return (
              <Button size="lg" leftIcon={<Icon as={src} />} key={title} colorScheme={color} boxShadow={'md'}>{title}</Button>
            )
          })}
        </HStack>
      </Stack>
    </VStack>
  )
}

export default Tecnologies