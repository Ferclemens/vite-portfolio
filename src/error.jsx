import React from 'react'
import ReactDOM from 'react-dom/client'
// Import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// Import Context provider
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import NotFound404 from './components/NotFound404.jsx'

ReactDOM.createRoot(document.getElementById('error')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeContextProvider>
        <NotFound404></NotFound404>
      </ThemeContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)