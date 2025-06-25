import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box as="main" minH="calc(100vh - 160px)">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
