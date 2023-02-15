import React from 'react'
import ReactDOM from 'react-dom/client'
import SuccessSendMessage from './components/SuccessSendMessage.jsx'
// Import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// Import Context provider
import { ThemeContextProvider } from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('success')).render(
    <ChakraProvider>
      <ThemeContextProvider>
        <SuccessSendMessage></SuccessSendMessage>
      </ThemeContextProvider>
    </ChakraProvider>
)