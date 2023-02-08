import { Button, ButtonGroup, Stack, Icon, Box, Spacer, Flex, Text, HStack, Link, Image } from '@chakra-ui/react'
import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {SiChakraui} from 'react-icons/si'

function Footer() {
    //Security -> rel="noopener noreferrer"
    //The newly open site (target="_blank") gains limited access to your page via the JavaScript window.opener object. This is a read/write object that any can manipulate. It has a property called window.opener.location that can be changed, causing the browser to go to a new URL instead of staying at your page. 
  return (
    <Stack w={'full'} p={2} direction={['column', 'row']} alignItems="center" justifyContent="space-evenly" bg={'rgba(255, 255, 255, 0.6)'}>
      <Text fontSize="m" >Made with Chakra <Icon as={SiChakraui}/> <Icon as={AiFillHeart}/></Text>
      <Text fontSize="m">Fer Clemens - web developer</Text>
      <ButtonGroup spacing={'10'} variant='ghost'>
        <Button leftIcon={<Icon as={BsGithub} />}><Link href='https://github.com/Ferclemens' isExternal>Github</Link></Button>
        <Button leftIcon={<Icon as={BsLinkedin} />}><Link href='https://www.linkedin.com/in/foclemens/' isExternal>linkedIn</Link></Button>
      </ButtonGroup>
    </Stack>
  )
}

export default Footer