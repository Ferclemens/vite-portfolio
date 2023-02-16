import { Button, ButtonGroup, Stack, Icon, Text, Link } from '@chakra-ui/react'
import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {SiChakraui} from 'react-icons/si'
import { useThemeContext } from '../context/ThemeContext'

function Footer() {
    const {language} = useThemeContext()

  return (
    <Stack w={'full'} p={2} direction={['column', 'row']} alignItems="center" justifyContent="space-evenly" bg={'rgba(255, 255, 255, 0.6)'}>
      <Text fontSize="m" >{language ? 'Created with Chakra UI' : 'Desarrollado con Chakra UI'} <Icon as={SiChakraui}/> <Icon as={AiFillHeart}/></Text>
      <Text fontSize="m">Fer Clemens - web developer</Text>
      <ButtonGroup spacing={'10'} variant='ghost'>
        <Button leftIcon={<Icon as={BsGithub} />}><Link href='https://github.com/Ferclemens' isExternal>Github</Link></Button>
        <Button leftIcon={<Icon as={BsLinkedin} />}><Link href='https://www.linkedin.com/in/foclemens/' isExternal>linkedIn</Link></Button>
      </ButtonGroup>
    </Stack>
  )
}

export default Footer