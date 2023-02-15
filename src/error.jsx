import React from 'react'
import ReactDOM from 'react-dom/client'
import NotFound404 from './components/NotFound404.jsx'
// Import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// Import Context provider
import { ThemeContextProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('error')).render(
    <ChakraProvider>
      <ThemeContextProvider>
        <NotFound404></NotFound404>
      </ThemeContextProvider>
    </ChakraProvider>
)