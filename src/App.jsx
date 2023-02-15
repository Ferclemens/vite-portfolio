import './styles/App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Tecnologies from './components/Tecnologies'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer.jsx'
import Presentation from './components/Presentation'
import { VStack } from '@chakra-ui/react'
import SwitchTheme from './components/SwitchTheme'
import { Route, Routes } from 'react-router'
import SuccessSendMessage from './components/SuccessSendMessage'
import NotFound404 from './components/NotFound404'

function App() { 
  return (
    <Routes>
      <Route path='/' element={
        <VStack>
          <Navbar/>
          <SwitchTheme/>
          <Presentation/>        
          <About/>
          <Tecnologies/>
          <Work/>
          <Contact/>
          <Footer/>
        </VStack>
      }/>
      <Route path='/successSend' element={<SuccessSendMessage/>}/>
      <Route path='*' element={<NotFound404/>}/>
    </Routes>
  )
}

export default App
