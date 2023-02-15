import React from 'react'
import ReactDOM from 'react-dom/client'
// Import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// Import Context provider
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import SuccessSendMessage from './components/SuccessSendMessage.jsx'

ReactDOM.createRoot(document.getElementById('success')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeContextProvider>
        <SuccessSendMessage></SuccessSendMessage>
      </ThemeContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)