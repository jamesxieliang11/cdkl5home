import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

// 自定义主题
const theme = extendTheme({
  fonts: {
    heading: "'Noto Sans SC', sans-serif",
    body: "'Noto Sans SC', sans-serif",
  },
  colors: {
    brand: {
      50: '#e6f7ff',
      100: '#bae3ff',
      200: '#8dcfff',
      300: '#5eb9ff',
      400: '#36a3ff',
      500: '#1a8cff', // 主色
      600: '#0070cc',
      700: '#005299',
      800: '#003666',
      900: '#001833',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        borderRadius: "md",
      },
      variants: {
        primary: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
      },
    },
  },
});

const root = createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
