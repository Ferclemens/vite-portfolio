import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  Icon,
  ButtonGroup,
  Text,
  Spacer,
  useBreakpointValue
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {BsGithub, BsLinkedin, BsMailbox} from 'react-icons/bs'
import { useThemeContext } from '../context/ThemeContext';


export default function Simple() {
  const {language} = useThemeContext()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = language ? ['Up','About', 'Tecnologies', 'Work', 'Contact'] : ['Inicio','Acerca de', 'Tecnologías', 'Trabajo', 'Contacto'];
  const spacingButtonDinamic = useBreakpointValue({base:'6', sm:'4', lg:'8'})

  return (
      <Box bg={'rgba(255, 255, 255, 0.4)'} px={4} position={'fixed'} w={'100vw'} zIndex={'1'} backdropFilter='auto' backdropBlur='8px'>
        <Flex h={16} px={4} alignItems={'center'} justifyContent={'flex-end'}>
        <ButtonGroup spacing={'3'} p={'3'} justifyContent={'flex-start'}>
          <Link href='https://github.com/Ferclemens' isExternal><Icon as={BsGithub} /></Link>
          <Link href='https://www.linkedin.com/in/foclemens/' isExternal><Icon as={BsLinkedin} /></Link>
          <Text>foclemens@gmail.com</Text>
        </ButtonGroup>
        <Spacer/>
          <IconButton
            size={'sm'}
            backgroundColor={'teal.400'}
            shadow={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={spacingButtonDinamic}
              display={{ base: 'none', md: 'flex' }}
              >
              {Links.map((link) => (
                <Link href={`#${link}`} key={link}><Button colorScheme={'yellow'} boxShadow={'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'}>{link}</Button></Link>
              ))}
            </HStack>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link href={`#${link}`} key={link}><Button colorScheme={'yellow'}  boxShadow={'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'}>{link}</Button></Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
  );
}
