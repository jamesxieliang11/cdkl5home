import React from 'react';
import { Box, Container, Heading, Text, Button, Image, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        align="center" 
        justify="center"
        gap={8}
      >
        <Box textAlign={{ base: 'center', md: 'left' }} maxW="md">
          <Heading as="h1" size="4xl" mb={4} color="brand.500">
            404
          </Heading>
          <Heading as="h2" size="xl" mb={6}>
            页面未找到
          </Heading>
          <Text fontSize="lg" mb={8} color="gray.600">
            抱歉，您访问的页面不存在或已被移除。请返回首页或浏览其他页面。
          </Text>
          <Button
            as={RouterLink}
            to="/"
            colorScheme="brand"
            size="lg"
          >
            返回首页
          </Button>
        </Box>
        <Box>
          <Image
            src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt="404 Not Found"
            borderRadius="lg"
            shadow="lg"
            maxW="400px"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default NotFound;
