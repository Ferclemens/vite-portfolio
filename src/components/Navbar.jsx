import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  Icon,
  ButtonGroup,
  Text,
  Spacer
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {BsGithub, BsLinkedin, BsMailbox} from 'react-icons/bs'

const Links = ['Up','About', 'Tecnologies', 'Work', 'Contact'];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box bg={'rgba(255, 255, 255, 0.4)'} px={4} position={'fixed'} w={'100vw'} zIndex={'1'} backdropFilter='auto' backdropBlur='8px'>
        <Flex h={16} px={4} alignItems={'center'} justifyContent={'flex-end'}>
        <ButtonGroup spacing={'3'} p={'3'} variant='ghost' justifyContent={'flex-start'}>
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
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={6}
              display={{ base: 'none', md: 'flex' }}
              >
              {Links.map((link) => (
                <Link href={`#${link}`}><Button colorScheme={'yellow'} key={link} boxShadow={'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'}>{link}</Button></Link>
              ))}
            </HStack>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link href={`#${link}`}><Button colorScheme={'yellow'} key={link} boxShadow={'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'}>{link}</Button></Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
  );
}
