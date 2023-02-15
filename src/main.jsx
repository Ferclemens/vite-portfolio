import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
// Import Context provider
import { ThemeContextProvider } from './context/ThemeContext.jsx'
// Import React Router Dom
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
