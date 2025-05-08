import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Container,
  Stack,
  Image,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
  { name: '首页', path: '/' },
  { name: '关于CDKL5', path: '/about' },
  { name: '研究与进展', path: '/research' },
  { name: '患者支持', path: '/support' },
  { name: '社区论坛', path: '/community' },
  { name: '行动倡导', path: '/advocacy' },
  { name: '资源中心', path: '/resources' },
  { name: '联系我们', path: '/contact' }
];

const NavLink = ({ children, path, isActive }) => (
  <Link
    as={RouterLink}
    to={path}
    px={2}
    py={1}
    rounded={'md'}
    fontWeight={isActive ? 'bold' : 'medium'}
    color={isActive ? 'brand.600' : 'gray.600'}
    borderBottom={isActive ? '2px solid' : 'none'}
    borderColor="brand.500"
    _hover={{
      textDecoration: 'none',
      color: 'brand.500',
    }}
  >
    {children}
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  return (
    <Box bg="white" px={4} boxShadow="sm" position="sticky" top="0" zIndex="sticky">
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link as={RouterLink} to="/">
                <Flex alignItems="center">
                  <Text fontSize="xl" fontWeight="bold" color="brand.600">
                    CDKL5 门户
                  </Text>
                </Flex>
              </Link>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.path} path={link.path} isActive={location.pathname === link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'primary'}
              size={'sm'}
              mr={4}
              display={{ base: 'none', md: 'inline-flex' }}
            >
              紧急求助
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.path} path={link.path} isActive={location.pathname === link.path}>
                  {link.name}
                </NavLink>
              ))}
              <Button variant={'primary'} w="100%">紧急求助</Button>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};

export default Header;
