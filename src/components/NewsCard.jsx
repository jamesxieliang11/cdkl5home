import React from 'react';
import { Box, Image, Text, Heading, Stack, Badge, LinkBox, LinkOverlay } from '@chakra-ui/react';

const NewsCard = ({ title, date, image, summary, category, link, ...rest }) => {
  return (
    <LinkBox 
      as={Box}
      maxW="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="sm"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'md',
      }}
      {...rest}
    >
      <Box 
        as="img" 
        src={image} 
        alt={title} 
        height="200px" 
        width="100%" 
        objectFit="cover" 
      />
      <Box p={5}>
        <Stack direction="row" spacing={2} mb={2} align="center">
          <Badge colorScheme="brand" variant="solid" px={2} py={1} borderRadius="md">
            {category}
          </Badge>
          <Text color="gray.500" fontSize="sm">
            {date}
          </Text>
        </Stack>
        <Heading as="h3" size="md" mb={3} lineHeight="tight">
          <LinkOverlay href={link}>
            {title}
          </LinkOverlay>
        </Heading>
        <Text color="gray.600" noOfLines={3}>
          {summary}
        </Text>
      </Box>
    </LinkBox>
  );
};

export default NewsCard;
