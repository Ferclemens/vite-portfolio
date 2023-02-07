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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home','About', 'Tecnologies', 'Work', 'Contact'];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box bg={'rgba(255, 255, 255, 0.4)'} px={4} position={'fixed'} w={'full'} zIndex={'1'} backdropFilter='auto' backdropBlur='8px'>
        <Flex h={16} px={4} alignItems={'center'} justifyContent={'flex-end'}>
          <IconButton
            size={'lg'}
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
                <Link href={`#${link}`}><Button colorScheme={'yellow'} key={link}>{link}</Button></Link>
              ))}
            </HStack>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link href={`#${link}`}><Button colorScheme={'yellow'} key={link}>{link}</Button></Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
  );
}
