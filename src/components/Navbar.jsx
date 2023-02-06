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

const Links = ['About', 'Tecnologies', 'Work', 'Contact'];

const NavLink = ({children}) => (
  <Button colorScheme={'yellow'} shadow={'md'}>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        border:'1px',
      }}
      href={'#'}>
      {children}
    </Link>
  </Button>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'rgba(255, 255, 255, 0.6)'} px={4}>
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
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
