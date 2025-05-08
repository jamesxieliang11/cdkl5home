import React from 'react';
import { Box, Container, Heading, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';

const PageHeader = ({ title, breadcrumbs = [], description }) => {
  return (
    <Box bg="gray.50" py={10} mb={8}>
      <Container maxW="container.xl">
        {breadcrumbs.length > 0 && (
          <Breadcrumb 
            spacing="8px" 
            separator={<ChevronRightIcon color="gray.500" />} 
            mb={4}
            fontSize="sm"
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/">首页</BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.map((item, index) => (
              <BreadcrumbItem key={index} isCurrentPage={index === breadcrumbs.length - 1}>
                <BreadcrumbLink 
                  as={index === breadcrumbs.length - 1 ? undefined : RouterLink} 
                  to={item.path}
                >
                  {item.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        )}
        <Heading as="h1" size="2xl" mb={3}>
          {title}
        </Heading>
        {description && (
          <Text color="gray.600" fontSize="xl" maxW="container.md">
            {description}
          </Text>
        )}
      </Container>
    </Box>
  );
};

export default PageHeader;
