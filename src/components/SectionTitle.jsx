import React from 'react';
import { Box, Heading, Text, Divider, Flex } from '@chakra-ui/react';

const SectionTitle = ({ title, subtitle, align = 'center', ...rest }) => {
  return (
    <Box textAlign={align} mb={8} {...rest}>
      <Heading as="h2" size="xl" mb={3} color="brand.600">
        {title}
      </Heading>
      {subtitle && (
        <Text color="gray.600" fontSize="lg" maxW="container.md" mx={align === 'center' ? 'auto' : '0'}>
          {subtitle}
        </Text>
      )}
      <Flex justify={align === 'center' ? 'center' : 'flex-start'} mt={4}>
        <Divider width="80px" borderBottomWidth="4px" borderColor="brand.500" />
      </Flex>
    </Box>
  );
};

export default SectionTitle;
