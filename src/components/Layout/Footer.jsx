import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Flex,
  Heading,
  useColorModeValue,
  Button,
  Input,
  HStack,
  VStack,
  Icon
} from '@chakra-ui/react';
import { 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container as={Stack} maxW={'container.xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Heading as="h3" size="md" color="brand.600">
                CDKL5 门户网站
              </Heading>
            </Box>
            <Text fontSize={'sm'}>
              致力于为CDKL5患者及家庭提供全面支持和最新资讯，
              共同推进CDKL5相关研究与治疗发展。
            </Text>
            <HStack spacing={6}>
              <Link href="#" isExternal>
                <Icon as={FaTwitter} boxSize={5} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaFacebook} boxSize={5} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaInstagram} boxSize={5} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaLinkedin} boxSize={5} />
              </Link>
            </HStack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>快速链接</ListHeader>
            <Link as={RouterLink} to="/">首页</Link>
            <Link as={RouterLink} to="/about">关于CDKL5</Link>
            <Link as={RouterLink} to="/research">研究与进展</Link>
            <Link as={RouterLink} to="/support">患者支持</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>资源</ListHeader>
            <Link as={RouterLink} to="/community">社区论坛</Link>
            <Link as={RouterLink} to="/advocacy">行动倡导</Link>
            <Link as={RouterLink} to="/resources">资源中心</Link>
            <Link as={RouterLink} to="/contact">联系我们</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>联系方式</ListHeader>
            <HStack>
              <Icon as={FaEnvelope} />
              <Text>contact@cdkl5portal.org</Text>
            </HStack>
            <HStack>
              <Icon as={FaPhone} />
              <Text>+86 10 12345678</Text>
            </HStack>
            <HStack align="flex-start">
              <Icon as={FaMapMarkerAlt} mt={1} />
              <Text>北京市海淀区中关村南大街5号</Text>
            </HStack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>订阅通讯</ListHeader>
            <Stack direction={'column'} spacing={3} width="100%">
              <Input
                placeholder={'您的邮箱'}
                bg={useColorModeValue('white', 'gray.800')}
                border={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                _focus={{
                  bg: 'white',
                  borderColor: 'brand.500',
                }}
              />
              <Button variant="primary" colorScheme="brand" width="100%">
                订阅
              </Button>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={4} borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container maxW={'container.xl'}>
          <Text pt={2} fontSize={'sm'} textAlign={'center'}>
            © {new Date().getFullYear()} CDKL5 门户网站. 保留所有权利.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
