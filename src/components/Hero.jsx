import React from 'react';
import { 
  Box, 
  Heading, 
  Container, 
  Text, 
  Button, 
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

const Hero = ({ 
  title, 
  subtitle, 
  image, 
  ctaText, 
  ctaLink, 
  ...rest 
}) => {
  return (
    <Box
      w={'full'}
      h={{ base: '60vh', md: '70vh' }}
      backgroundImage={`url(${image})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      position="relative"
      {...rest}
    >
      {/* 半透明覆盖层 */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.600"
        zIndex="1"
      />
      
      <Container size="container.lg" height="100%" position="relative" zIndex="2">
        <Stack
          height="100%"
          spacing={6}
          align={'center'}
          justify={'center'}
          color={'white'}
          textAlign={'center'}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lineHeight={'110%'}
          >
            {title}
          </Heading>
          <Text
            maxW={'3xl'}
            fontSize={{ base: 'md', md: 'xl' }}
          >
            {subtitle}
          </Text>
          {ctaText && (
            <Stack direction={'row'} spacing={4}>
              <Button
                bg={'brand.500'}
                rounded={'md'}
                color={'white'}
                _hover={{ bg: 'brand.600' }}
                size="lg"
                px={8}
                as="a"
                href={ctaLink}
              >
                {ctaText}
              </Button>
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
