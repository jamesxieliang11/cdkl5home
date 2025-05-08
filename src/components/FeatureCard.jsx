import React from 'react';
import { Box, Flex, Text, Heading, Icon, LinkBox, LinkOverlay } from '@chakra-ui/react';

const FeatureCard = ({ title, description, icon, link, ...rest }) => {
  return (
    <LinkBox 
      as={Flex}
      direction="column"
      alignItems="center"
      textAlign="center"
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'lg',
      }}
      {...rest}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'brand.500'}
        mb={4}
      >
        <Icon as={icon} w={8} h={8} />
      </Flex>
      <Heading as="h3" size="md" mb={3}>
        {link ? (
          <LinkOverlay href={link}>
            {title}
          </LinkOverlay>
        ) : (
          title
        )}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </LinkBox>
  );
};

export default FeatureCard;
