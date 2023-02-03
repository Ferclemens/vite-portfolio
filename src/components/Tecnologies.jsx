import { Box, Button, Flex, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack, Icon } from '@chakra-ui/react'
import React from 'react'
import { SiChakraui, SiHtml5, SiCss3, SiJavascript, SiGit, SiPython, SiReact, SiRedux, SiNodedotjs, SiExpress, SiMysql, SiFirebase, SiBootstrap, SiVisualstudiocode } from 'react-icons/si';

function Tecnologies() {

  const tecnologies = [
    {
      src: SiHtml5,
      title:'HTML'
    },
    {
      src: SiCss3,
      title:'CSS'
    },
    {
      src: SiJavascript,
      title:'Javascript'
    },
    {
      src: SiGit,
      title:'Git'
    },
    {
      src: SiVisualstudiocode,
      title:'Visual Studio'
    },
    {
      src: SiPython,
      title:'Python'
    },
    {
      src: SiReact,
      title:'React'
    },
    {
      src: SiRedux,
      title:'Redux'
    },
    {
      src: SiNodedotjs,
      title:'Node.js'
    },
    {
      src: SiExpress,
      title:'Express'
    },
    {
      src: SiMysql,
      title:'MySQL'
    },
    {
      src: SiFirebase,
      title:'Firebase'
    },
    {
      src: SiBootstrap,
      title:'Bootstrap'
    },
    {
      src: SiChakraui,
      title:'Chakra'
    }

  ]

  return (
    <VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
      <Heading>Tecnologies</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
      <HStack justifyContent="center" alignItems="center" flexWrap="wrap" gap={5}>
        {tecnologies.map((item) => {
          const {src, title} = item
          return (
            <Button size="lg" leftIcon={<Icon as={src} />} key={title}>{title}</Button>
          )
        })}
      </HStack>
    </VStack>
  )
}

export default Tecnologies